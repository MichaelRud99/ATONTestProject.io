import { createSlice } from "@reduxjs/toolkit";

export const editFieldsSlice = createSlice({
   name: "inputFields",
   initialState: {
      email: "",
      firstName: "",
      lastName: "",
   },

   reducers: {
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
         state.email = "";
         state.firstName = "";
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
