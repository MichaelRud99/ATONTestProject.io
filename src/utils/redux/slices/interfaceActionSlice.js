import { createSlice } from "@reduxjs/toolkit";

export const interfaceActionSlice = createSlice({
   name: "interfaceActions",
   initialState: { edit: false, open: true, valid: true },
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
   },
});

export const {
   editTrue,
   editFalse,
   openTrue,
   openFalse,
   validTrue,
   validFalse,
} = interfaceActionSlice.actions;

export default interfaceActionSlice.reducer;
