import { createSlice } from "@reduxjs/toolkit";

export const interfaceActionSlice = createSlice({
   name: "interfaceActions",
   initialState: {
      edit: false,
      open: true,
      valid: true,
      openRegistration: false,
      successRegistraton: false,
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
} = interfaceActionSlice.actions;

export default interfaceActionSlice.reducer;
