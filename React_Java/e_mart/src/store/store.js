import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';
import NavBarReducer from'./reducers/NavBarReducer';
const store = configureStore({
    reducer:{
        cart:cartReducer,
        user:userReducer,
        NavBar:NavBarReducer
    }
})



export default store;