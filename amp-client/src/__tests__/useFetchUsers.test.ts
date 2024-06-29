import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import axios from 'axios';
import { defineComponent } from 'vue';
import { useFetchUsers } from '../hooks/useFetchUsers';

vi.mock('axios');

describe('useFetchUsers Hook', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

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
      {
        id: 2,
        username: 'user2',
        email: 'user2@example.com',
        userIcon: 'url_to_icon2',
        categories: [
          {
            id: 3,
            name: 'Category3',
            items: [
              { id: 5, name: 'Item5' },
              { id: 6, name: 'Item6' },
            ],
          },
        ],
      },
    ];

    (axios.get as vi.Mock).mockResolvedValue({ data: mockData });

    const TestComponent = defineComponent({
      template: '<div></div>',
      setup() {
        const { users } = useFetchUsers();
        return { users };
      },
    });

    const wrapper = mount(TestComponent);
    await flushPromises(); // 確実にすべての非同期更新を待つ

    expect(wrapper.vm.users).toEqual(mockData);
  });
});