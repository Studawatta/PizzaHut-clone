import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      const pizzaId = action.payload;
      try {
        const exist = state.cart.find((pizza) => pizza.id === pizzaId.id);

        if (exist) {
          exist.amount++;
          exist.totalPrice += pizzaId.price;
          state.totalAmount++;
          state.totalPrice += pizzaId.price;
        } else {
          state.cart.push({
            id: pizzaId.id,
            price: pizzaId.price,
            name: pizzaId.name,
            totalPrice: pizzaId.price,
            amount: 1,
          });
          state.totalAmount++;
          state.totalPrice += pizzaId.price;
        }
      } catch (error) {
        return error;
      }
    },
    increaseAmount: (state, action) => {
      const pizzaId = action.payload;
      try {
        const pizza = state.cart.find((pizza) => pizza.id === pizzaId);
        pizza.amount++;
        pizza.totalPrice += pizza.price;
        state.totalAmount++;
        state.totalPrice += pizza.price;
      } catch (error) {
        return error;
      }
    },
    decreaseAmount: (state, action) => {
      const pizzaId = action.payload;
      try {
        const pizza = state.cart.find((pizza) => pizza.id === pizzaId);
        if (pizza && pizza.amount > 1) {
          pizza.amount--;
          pizza.totalPrice -= pizza.price;
          state.totalAmount--;
          state.totalPrice -= pizza.price;
        }
      } catch (error) {
        return error;
      }
    },
    deletePizza: (state, action) => {
      const pizzaId = action.payload;
      try {
        const pizza = state.cart.find((pizza) => pizza.id === pizzaId);
        const total = pizza.totalPrice;
        console.log(total);
        state.totalAmount -= pizza.amount;
        state.totalPrice -= total;
        state.cart = state.cart.filter((pizza) => pizza.id !== pizzaId);
      } catch (error) {
        return error;
      }
    },
  },
});

export const { addToCart, increaseAmount, decreaseAmount, deletePizza } =
  cartSlice.actions;
export default cartSlice.reducer;
