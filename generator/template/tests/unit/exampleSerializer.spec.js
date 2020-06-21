import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('MyComponent.vue', () => {
  describe('Created', () => {
    test('Renders correctly with default props', () => {
      const wrapper = shallowMount(App);

      expect(wrapper)
        .toMatchSnapshot();
    });
  });
});
