/// <reference types="vitest" />
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import axios from 'axios';
import { defineComponent, ref } from 'vue';
import type { Mocked } from 'vitest';

import { useUserLogin } from '../hooks/useUserLogin';

// Mock axios
vi.mock('axios');

describe('useUserLogin', () => {
    let mockedAxios: Mocked<typeof axios>;

    // Reset mocks before each test
    beforeEach(() => {
        vi.resetAllMocks();
        vi.spyOn(window, 'alert').mockImplementation(() => {});
        mockedAxios = axios as Mocked<typeof axios>;
    });

    it('authenticates user correctly', async () => {
        const mockData = { 
            accessToken: 'jwt_access_token',
            refreshToken: 'jwt_refresh_token', 
        }

        mockedAxios.post.mockResolvedValue({ data: mockData });

        const TestComponent = defineComponent({
            template: '<div></div>',
            setup() {
                const email = ref('test@example.com');
                const error = ref('');
                const { authenticateUser } = useUserLogin(email, error);
                return { email, error, authenticateUser };
            },
        });

        const wrapper = mount(TestComponent);
        const { authenticateUser } = wrapper.vm;

        await authenticateUser();
        await flushPromises(); 

        // axios.postが呼び出されたことを確認
        expect(mockedAxios.post).toHaveBeenCalledWith('/api/v1/login', { email: 'test@example.com' });
    });

    it('displays error message when invalid input data is provided', async () => {
        const TestComponent = defineComponent({
            template: '<div></div>',
            setup() {
                const email = ref('');
                const error = ref('');
                const { authenticateUser } = useUserLogin(email, error);
                return { email, error, authenticateUser };
            },
        });

        const wrapper = mount(TestComponent);
        const { authenticateUser } = wrapper.vm;

        await authenticateUser();
        await flushPromises(); 

        // エラーメッセージが表示されることを確認
        expect(wrapper.vm.error).toBe('メールアドレスは必須です。');
    });

    it('displays error message when user is not authenticated', async () => {
        mockedAxios.post.mockRejectedValue({ response: { status: 401 } });

        const TestComponent = defineComponent({
            template: '<div></div>',
            setup() {
                const email = ref('test@example.com');
                const error = ref('');
                const { authenticateUser } = useUserLogin(email, error);
                return { email, error, authenticateUser };
            },
        });

        const wrapper = mount(TestComponent);
        const { authenticateUser } = wrapper.vm;

        await authenticateUser();
        await flushPromises();

        // エラーメッセージが表示されることを確認
        expect(wrapper.vm.error).toBe('認証に失敗しました。');
    });

    it('displays error message when server error occurs', async () => {
        mockedAxios.post.mockRejectedValue({ response: { status: 500 } });

        const TestComponent = defineComponent({
            template: '<div></div>',
            setup() {
                const email = ref('test@example.com');
                const error = ref('');
                const { authenticateUser } = useUserLogin(email, error);
                return { email, error, authenticateUser };
            },
        });

        const wrapper = mount(TestComponent);
        const { authenticateUser } = wrapper.vm;

        await authenticateUser();
        await flushPromises();

        // エラーメッセージが表示されることを確認
        expect(wrapper.vm.error).toBe('サーバーエラーが発生しました。');
    });
});