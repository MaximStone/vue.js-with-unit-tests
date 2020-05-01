import { render, fireEvent } from '@testing-library/vue';
import MenuItem from '@/components/MenuItem';
import menuMock from '@/store/mocks/menu.json';

const propsData = {
  item: menuMock[0],
};

test('Menu item label is correct', async () => {
  const { getByText } = render(MenuItem, {
    props: propsData,
  });

  getByText(menuMock[0].name);
});

test('Menu item is clickable', async () => {
  const text = menuMock[0].name;

  const { getByText, emitted } = render(MenuItem, {
    props: propsData,
  });

  await fireEvent.click(getByText(text));

  expect(emitted()).toHaveProperty('click');
});
