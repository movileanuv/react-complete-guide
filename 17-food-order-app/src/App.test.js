import {render, screen} from '@testing-library/react';
import App from './App';

test('renders products', async () => {
  // arrange
  window.fetch = jest.fn()
  window.fetch.mockResolvedValueOnce({
    json: async () => [
      {"name": "Döner", "price": 2.99}
    ]
  })

  render(<App/>);

  // assert
  const productsList = await screen.findAllByRole('listitem');
  expect(productsList).not.toHaveLength(0);
});
