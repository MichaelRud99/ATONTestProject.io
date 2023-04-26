import { createSlice } from "@reduxjs/toolkit";

export const loginFieldsSlice = createSlice({
   name: "editFields",
   initialState: {
      username: "",
      email:"",
      password: "",
   },

   reducers: {
      enterLogin: (state, username) => {
         state.username = username.payload;
      },

      enterEmail: (state, email) => {
         state.email = email.payload;
      },

      enterPassword: (state, password) => {
         state.password = password.payload;
      },
   },
});

export const { enterLogin,enterEmail, enterPassword } = loginFieldsSlice.actions;

export default loginFieldsSlice.reducer;
