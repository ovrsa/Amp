/// <reference types="vitest" />
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import axios from 'axios';
import { defineComponent } from 'vue';
import type { Mocked } from 'vitest';

import { useFetchCategories } from '../hooks/useFetchCategories';

// Mock axios
vi.mock('axios');

describe('useFetchCategories', () => {
    let mockedAxios: Mocked<typeof axios>;

    // Reset mocks before each test
    beforeEach(() => {
        vi.resetAllMocks();
        vi.spyOn(window, 'alert').mockImplementation(() => {});
        mockedAxios = axios as Mocked<typeof axios>;
    });

    /**
     * カテゴリを正しく取得し、セットすることを確認する
     * fetchCategoriesが呼び出されたときに、カテゴリが正しくセットされていることを確認する
     * axios.getが呼び出されたことを確認する
     */
    it('fetches and sets categories correctly', async () => {
        const mockData = [
        {
            id: 1,
            name: 'Category1',
        },
        {
            id: 2,
            name: 'Category2',
        },
        ];

        mockedAxios.get.mockResolvedValue({ data: mockData });

        // テストコンポーネントの作成
        const TestComponent = defineComponent({
            template: '<div></div>',
            setup() {
            const { categories, fetchCategories } = useFetchCategories();
            fetchCategories(); // fetchCategoriesを呼び出す
            return { categories };
            },
        });

        const wrapper = mount(TestComponent);
        await flushPromises();
        
        // カテゴリが正しくセットされていることを確認
        expect(wrapper.vm.categories).toEqual(mockData);
        // axios.getが呼び出されたことを確認
        expect(mockedAxios.get).toHaveBeenCalledWith('/api/v1/categories');
    });

    /**
     * 401エラーが発生した場合のテスト
     * 401エラーが発生した場合に、認証エラーが発生したことを示すアラートが表示されることを確認する
     * axios.getが呼び出されたことを確認する
     */
    it('shows an alert when 401 error occurs', async () => {
        mockedAxios.get.mockRejectedValue({ response: { status: 401 } });

        // テストコンポーネントの作成
        const TestComponent = defineComponent({
        template: '<div></div>',
        setup() {
            const { categories, fetchCategories } = useFetchCategories();
            fetchCategories();
            return { categories };
        },
        });

        const wrapper = mount(TestComponent);
        await flushPromises();

        // アラートが表示されたことを確認
        expect(window.alert).toHaveBeenCalledWith('認証に失敗しました。');
        expect(mockedAxios.get).toHaveBeenCalledWith('/api/v1/categories');
    });

    /**
     * 500エラーが発生した場合のテスト
     * 500エラーが発生した場合に、サーバーエラーが発生したことを示すアラートが表示されることを確認する
     * axios.getが呼び出されたことを確認する
     */
    it ('shows an alert when 500 error occurs', async () => {
        mockedAxios.get.mockRejectedValue({ response: { status: 500 } });

        const TestComponent = defineComponent({
            template: '<div></div>',
            setup() {
                const { categories, fetchCategories } = useFetchCategories();
                fetchCategories();
                return { categories };
            },
        });

        const wrapper = mount(TestComponent);
        await flushPromises();

        expect(window.alert).toHaveBeenCalledWith('サーバーエラーが発生しました。');
        expect(mockedAxios.get).toHaveBeenCalledWith('/api/v1/categories');
    })
});