import MenuList from '@/components/MenuList';
import { fireEvent, render } from '@testing-library/vue';
import menuMock from '@/store/mocks/menu.json';

const propsData = {
  items: menuMock,
};

test('Menu has items', async () => {
  const { getByText } = render(MenuList, {
    props: propsData,
    stubs: ['NuxtLink'],
  });

  getByText(menuMock[0].name);
  getByText(menuMock[1].name);
});

test('Menu item click fires open event for submenu', async () => {
  const text = menuMock[0].name;

  const { getByText, emitted } = render(MenuList, {
    props: propsData,
    stubs: ['NuxtLink'],
  });

  await fireEvent.click(getByText(text));

  console.log('emitted()', Object.keys(emitted()));

  expect(emitted()).toHaveProperty('openSubmenu');
});
