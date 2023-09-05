// reducers.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn:false,
    userName: null,
    cust_Id: null ,
  },
  reducers: {
    logout: () => {
      console.log("logging out");
      return {
        isLoggedIn: false,
        userName: null,
        cust_Id: null,
        customer : null,
      };
    },
    login: (state, action) => {
      console.log(action, "login into session");
      return {
        isLoggedIn: true,
        Username: action.payload.userName,
        cust_Id: action.payload.cust_Id,
        customer: { ...action.payload.customer },
      };
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
