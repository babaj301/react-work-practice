import { render, screen, waitFor } from '@testing-library/react';
import Nav from '../components/landing-components/Nav';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchProducts } from '../redux/storeSlice';
import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import storeReducer from '../redux/storeSlice';

vi.mock('axios');

describe('fetchProducts async thunk', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        store: storeReducer,
      },
    });
  });

  it('fetches products', async () => {
    const mockProducts = [
      {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: { rate: 3.9, count: 120 },
      },
      // Add more mock products as needed
    ];
    axios.get.mockResolvedValueOnce({
      data: mockProducts,
      config: { url: 'https://fakestoreapi.com/products' },
    });

    const result = await store.dispatch(fetchProducts());

    expect(result.payload[0]).toEqual(mockProducts[0]);
  });

  it('adds product to cart on button click'),
    async () => {
      const mockProducts = [
        {
          id: 1,
          title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
          price: 109.95,
          description:
            'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
          category: "men's clothing",
          image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
          rating: { rate: 3.9, count: 120 },
        },
      ];
    };

    axios.get.mockResolvedValueOnce({
      data: mockProducts,
      config: { url: 'https://fakestoreapi.com/products' },
    });

    const result = await store.dispatch(fetchProducts());

    expect(result.payload[0]).toEqual(mockProducts[0]);

});
