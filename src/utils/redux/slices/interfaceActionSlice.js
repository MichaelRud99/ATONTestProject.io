import { createSlice } from "@reduxjs/toolkit";

export const interfaceActionSlice = createSlice({
   name: "interfaceActions",
   initialState: {
      edit: false,
      open: true,
      valid: true,
      openRegistration: false,
      successRegistraton: false,
      successDelete: false,
      successLogin: false,
   },
   reducers: {
      editTrue: (state) => {
         state.edit = true;
      },
      editFalse: (state) => {
         state.edit = false;
      },
      openTrue: (state) => {
         state.open = true;
      },
      openFalse: (state) => {
         state.open = false;
      },
      validTrue: (state) => {
         state.valid = true;
      },
      validFalse: (state) => {
         state.valid = false;
      },

      openRegistrations: (state, bool) => {
         state.openRegistration = bool.payload;
      },

      successRegistraton: (state) => {
         state.successRegistraton = !state.successRegistraton;
      },

      successDelete: (state) => {
         state.successDelete = !state.successDelete;
      },

      successLogin: (state) => {
         state.successLogin = !state.successLogin;
      },
   },
});

export const {
   editTrue,
   editFalse,
   openTrue,
   openFalse,
   validTrue,
   validFalse,
   openRegistrations,
   successRegistraton,
   successLogin,
} = interfaceActionSlice.actions;

export default interfaceActionSlice.reducer;
