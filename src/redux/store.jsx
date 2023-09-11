import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';
import marketStore from './addYouCart/marketStore';
export default configureStore({
reducer: {
shopping:marketStore,
    
},

});
