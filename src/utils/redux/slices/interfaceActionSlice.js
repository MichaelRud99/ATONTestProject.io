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
      successDeleteAll: false,
      successLogin: false,
      successAddUser: false,
      successEdit: false,
      successDelete: false,
      successFail: false,
   },
   reducers: {
      edit: (state, bool) => {
         state.edit = bool.payload;
      },
      open: (state, bool) => {
         state.open = bool.payload;
      },
      valid: (state, bool) => {
         state.valid = bool.payload;
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

      successDeleteAll: (state, bool) => {
         state.successDeleteAll = bool.payload;
      },

      successLogin: (state, bool) => {
         state.successLogin = bool.payload;
      },

      successAddUser: (state, bool) => {
         state.successAddUser = bool.payload;
      },

      successEdit: (state, bool) => {
         state.successEdit = bool.payload;
      },

      successDelete: (state, bool) => {
         state.successDelete = bool.payload;
      },

      successFail: (state, message) => {
         state.successFail = message.payload;
      },
   },
});

export const {
   edit,
   open,
   valid,
   load,
   openRegistrations,
   successRegistraton,
   successLogin,
   successAddUser,
   successEdit,
   successDelete,
   successFail,
} = interfaceActionSlice.actions;

export default interfaceActionSlice.reducer;
