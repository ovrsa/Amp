/// <reference types="vitest" />
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import axios from 'axios';
import { defineComponent, ref } from 'vue';
import type { Mocked } from 'vitest';

import { useGoogleAuthLogin } from '../hooks/useGoogleAuthLogin';

// Mock axios
vi.mock('axios');

describe('useGoogleAuthLogin', () => {
    let mockedAxios: Mocked<typeof axios>;

    // Reset mocks before each test
    beforeEach(() => {
        vi.resetAllMocks();
        vi.spyOn(window, 'alert').mockImplementation(() => {});
        mockedAxios = axios as Mocked<typeof axios>;
    });

    /**
     * 200 Google認証URLを返すことを確認
     * @param None
     * @return {string} authUrl - Google認証URL
     */
    it('returns Google authentication URL', async () => {
        const mockData = { authUrl: 'https://accounts.google.com/o/oauth2/auth' };
        mockedAxios.get.mockResolvedValue({ data: mockData });

        const TestComponent = defineComponent({
            template: '<div>{{ authUrl }}</div>',
            setup() {
                const authUrl = ref('');
                const { googleAuthUrl } = useGoogleAuthLogin();
                googleAuthUrl().then((url) => {
                    //authurl.valueがnullでないことを確認
                    authUrl.value = url!; 
                }).catch((error) => {
                    console.error(error);
                });
                return { authUrl };
            },
        });

        const wrapper = mount(TestComponent);
        await flushPromises();

        // axios.getが呼び出されたことを確認
        expect(mockedAxios.get).toHaveBeenCalledWith('/api/v1/auth/google/url');
        // Google認証URLが返されたことを確認
        expect(wrapper.text()).toBe('https://accounts.google.com/o/oauth2/auth');
    });

    /**
     * 無効なリクエストデータが提供された場合にエラーメッセージを表示することを確認
     * 400 Bad Requestの場合
     * @params None
     * @return {string} alert - エラーメッセージ
     */
    it('displays error message when invalid request data is provided', async () => {
        const TestComponent = defineComponent({
            template: '<div></div>',
            setup() {
                const { googleAuthUrl } = useGoogleAuthLogin();
                return { googleAuthUrl };
            },
        });

        const wrapper = mount(TestComponent);
        const { googleAuthUrl } = wrapper.vm;

        mockedAxios.get.mockRejectedValue({ response: { status: 400 } });

        await googleAuthUrl();
        await flushPromises();

        // alertが呼び出されたことを確認
        expect(window.alert).toHaveBeenCalledWith('エラーが発生しました。');
    });

    /**
     * 認証されていない場合にエラーメッセージを表示することを確認
     * 401 Unauthorizedの場合
     * @params None
     * @return {string} alert - エラーメッセージ
     */
    it('displays error message when user is not authenticated', async () => {
        const TestComponent = defineComponent({
            template: '<div></div>',
            setup() {
                const { googleAuthUrl } = useGoogleAuthLogin();
                return { googleAuthUrl };
            },
        });

        const wrapper = mount(TestComponent);
        const { googleAuthUrl } = wrapper.vm;

        mockedAxios.get.mockRejectedValue({ response: { status: 401 } });

        await googleAuthUrl();
        await flushPromises();

        // alertが呼び出されたことを確認
        expect(window.alert).toHaveBeenCalledWith('認証に失敗しました。');
    });
});