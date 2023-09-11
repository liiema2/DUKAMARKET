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
   
      const newItem = action.payload;
      state.push(newItem);
    },
    editItem() {},
    removeItem() {},
 
  },
});

export const { addItem, editItem, removeItem } = shoppingCart.actions;
export default shoppingCart.reducer;
