import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      id:1,
      name: "Samsung",
      price: 200,
      img: "assets/img/cart/20.jpg"
    },
 
  ]; 

const shoppingCart = createSlice({
  name: 'shopping',
  initialState, 
  reducers: {
    addItem(state, action) {
      const nextId = state.length > 0 ? Math.max(...state.map(item => item.id)) + 1 : 1;
      const newItem = {
        id: nextId,
        name: action.payload,
        price: 300,
        img: "assets/img/cart/20.jpg"
      };
      return [...state, newItem];
    },
    editItem() {},
    removeItem() {},
  },
});

export const { addItem, editItem, removeItem } = shoppingCart.actions;
export default shoppingCart.reducer;
