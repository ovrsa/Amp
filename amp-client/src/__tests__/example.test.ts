import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { defineComponent } from 'vue';

const TestComponent = defineComponent({
  template: `<div>Hello, world!</div>`
});

describe('TestComponent', () => {
  test('renders correctly', () => {
    const wrapper = mount(TestComponent);
    expect(wrapper.html()).toContain('Hello, world!');
  });
});