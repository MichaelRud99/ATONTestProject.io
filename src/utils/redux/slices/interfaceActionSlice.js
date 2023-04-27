import { createSlice } from "@reduxjs/toolkit";

export const interfaceActionSlice = createSlice({
   name: "interfaceActions",
   initialState: {
      edit: false,
      open: true,
      valid: true,
      load: false,
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

      load: (state, bool) => {
         state.load = bool.payload;
      },

      openRegistrations: (state, bool) => {
         state.openRegistration = bool.payload;
      },

      successRegistraton: (state, bool) => {
         state.successRegistraton = bool.payload;
      },

      successDelete: (state, bool) => {
         state.successDelete = bool.payload;
      },

      successLogin: (state, bool) => {
         state.successLogin = bool.payload;
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
   load,
   openRegistrations,
   successRegistraton,
   successLogin,
} = interfaceActionSlice.actions;

export default interfaceActionSlice.reducer;
