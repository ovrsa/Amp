/// <reference types="vitest" />
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import axios from 'axios';
import { defineComponent } from 'vue';
import { useFetchUsers } from '../hooks/useFetchUsers';

vi.mock('axios'); // axiosをモック化

describe('useFetchUsers', () => {
  // テスト実行前にモックのリセット
  beforeEach(() => {
    vi.resetAllMocks();
    vi.spyOn(window, 'alert').mockImplementation(() => {});
  });

  // fetchUsersメソッドが正常に動作することを確認
  it('fetches and sets users correctly', async () => {
    const mockData = [
      {
        id: 1,
        username: 'user1',
        email: 'user1@example.com',
        userIcon: 'url_to_icon1',
        categories: [
          {
            id: 1,
            name: 'Category1',
            items: [
              { id: 1, name: 'Item1' },
              { id: 2, name: 'Item2' },
            ],
          },
          {
            id: 2,
            name: 'Category2',
            items: [
              { id: 3, name: 'Item3' },
              { id: 4, name: 'Item4' },
            ],
          },
        ],
      },
    ];

    // Axiosのgetメソッドをモック化
    (axios.get as vi.Mock).mockResolvedValue({ data: mockData });

    // テストコンポーネントの作成
    const TestComponent = defineComponent({
      template: '<div></div>',
      setup() {
        const { users, fetchUsers } = useFetchUsers();
        fetchUsers(); // fetchUsersを手動で呼び出す
        return { users };
      },
    });

    // テストコンポーネントのマウント
    const wrapper = mount(TestComponent);
    await flushPromises(); 

    // データの検証
    expect(wrapper.vm.users).toEqual(mockData);
  });

  // 認証エラーのテストケース
  it('handles authentication error', async () => {
    const errorMessage = 'データ取得時の認証に失敗しました。';

    (axios.get as vi.Mock).mockRejectedValue({
      response: {
        status: 401,
        data: { error: 'Unauthorized', message: errorMessage },
      },
    });

    const TestComponent = defineComponent({
      template: '<div></div>',
      setup() {
        const { users, fetchUsers } = useFetchUsers();
        fetchUsers(); // fetchUsersを手動で呼び出す
        return { users };
      },
    });

    const wrapper = mount(TestComponent);
    await flushPromises(); 

    // アラートが呼び出されたことを確認
    expect(window.alert).toHaveBeenCalledWith('認証に失敗しました。');
    expect(wrapper.vm.users).toEqual([]);
  });

  // サーバーエラーのテストケース
  it('handles server error', async () => {
    const errorMessage = 'サーバーエラーが発生しました。';

    (axios.get as vi.Mock).mockRejectedValue({
      response: {
        status: 500,
        data: { error: 'Internal server error', message: errorMessage },
      },
    });

    const TestComponent = defineComponent({
      template: '<div></div>',
      setup() {
        const { users, fetchUsers } = useFetchUsers();
        fetchUsers(); // fetchUsersを手動で呼び出す
        return { users };
      },
    });

    const wrapper = mount(TestComponent);
    await flushPromises(); 

    // エラーメッセージが設定されていることを確認
    expect(window.alert).toHaveBeenCalledWith('サーバーエラーが発生しました。');
    expect(wrapper.vm.users).toEqual([]);
  });
});