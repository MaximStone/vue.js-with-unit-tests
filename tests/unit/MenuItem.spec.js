import { render, fireEvent } from '@testing-library/vue';
import MenuItem from '@/components/MenuItem';
import menuMock from '@/store/mocks/menu.json';

const propsData = {
  item: menuMock[0],
};

test('Menu item label is correct', async () => {
  // The render method returns a collection of utilities to query the component.
  const { getByText } = render(MenuItem, {
    props: propsData,
  });

  // getByText returns the first matching node for the provided text, and
  // throws an error if no elements match or if more than one match is found.
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
