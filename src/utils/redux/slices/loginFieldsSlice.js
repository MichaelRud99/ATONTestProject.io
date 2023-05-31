import { createSlice } from "@reduxjs/toolkit";

export const loginFieldsSlice = createSlice({
   name: "editFields",
   initialState: {
      username: "",
      email: "",
      password: "",
      albumPhoto: "",
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
      enterAlbumPhoto: (state, albumPhoto) => {
         state.albumPhoto = albumPhoto.payload;
      },
   },
});

export const { enterUsername, enterEmail, enterPassword, enterAlbumPhoto } =
   loginFieldsSlice.actions;

export default loginFieldsSlice.reducer;
