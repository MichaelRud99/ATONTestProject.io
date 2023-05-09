import { createSlice } from "@reduxjs/toolkit";

export const loginFieldsSlice = createSlice({
   name: "editFields",
   initialState: {
      username: "",
      email:"",
      password: "",
   },

   reducers: {
      enterUsername: (state, username) => {
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

export const { enterUsername,enterEmail, enterPassword } = loginFieldsSlice.actions;

export default loginFieldsSlice.reducer;
