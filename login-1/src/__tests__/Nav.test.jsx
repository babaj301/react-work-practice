import { render, screen, waitFor } from '@testing-library/react';
import Nav from '../components/landing-components/Nav';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

describe('renders nav', () => {
  it('renders nav', () => {
    render(
      <Provider store={store}>
        <Nav />
      </Provider>
    );
    expect(screen.getByText('Cart')).toBeInTheDocument();
  });

  it('opens and closes cart', async () => {
    render(
      <Provider store={store}>
        <Nav />
      </Provider>
    );

    const cartButton = screen.getByTestId('cart-button');
    userEvent.click(cartButton);
    await waitFor(() => {
      expect(screen.getByText('CART')).toBeInTheDocument();
    });
    const closeButton = screen.getByTestId('close-button');
    const cart = screen.getByText('CART');
    userEvent.click(closeButton);
    await waitFor(() => {
      expect(cart).not.toBeInTheDocument();
    });
  });
});
