import { createSlice } from "@reduxjs/toolkit";

export const editFieldsSlice = createSlice({
   name: "inputFields",
   initialState: {
      albumPhoto: "default",
      email: "",
      firstName: "",
      avatar: "",
      lastName: "",
   },

   reducers: {
      enterAlbumPhoto: (state, albumPhoto) => {
         state.albumPhoto = albumPhoto.payload;
      },
      enterAlbum: (state, email) => {
         state.email = email.payload;
      },
      enterAuthor: (state, firstName) => {
         state.firstName = firstName.payload;
      },
      enterDataRelease: (state, avatar) => {
         state.avatar = avatar.payload;
      },
      enterTrack: (state, lastName) => {
         state.lastName = lastName.payload;
      },

      enterClear: (state) => {
         state.albumPhoto = "default";
         state.email = "";
         state.firstName = "";
         state.avatar = "";
         state.lastName = "";
      },
   },
});

export const {
   enterAlbumPhoto,
   enterAlbum,
   enterAuthor,
   enterDataRelease,
   enterTrack,
   enterClear,
} = editFieldsSlice.actions;

export default editFieldsSlice.reducer;
