import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
);

const storeSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    cart: [],
    status: 'idle',
    error: null,
  },

  reducers: {
    display: (state, action) => {
      console.log(state.value);
      console.log(action.payload);
    },
    updateCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },

    deleteCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find((i) => i.id === item.id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          state.cart = state.cart.filter((i) => i.id !== item.id);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { display, updateCart, deleteCart } = storeSlice.actions;
export default storeSlice.reducer;
