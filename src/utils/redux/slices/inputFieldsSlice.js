import { createSlice } from "@reduxjs/toolkit";

export const inputFieldsSlice = createSlice({
   name: "inputFields",
   initialState: {
      albumPhoto: "default",
      album: "",
      author: "",
      dataRelease: "",
      track: "",
   },

   reducers: {
      enterAlbumPhoto: (state, albumPhoto) => {
         state.albumPhoto = albumPhoto.payload;
      },
      enterAlbum: (state, album) => {
         state.album = album.payload;
      },
      enterAuthor: (state, author) => {
         state.author = author.payload;
      },
      enterDataRelease: (state, dataRelease) => {
         state.dataRelease = dataRelease.payload;
      },
      enterTrack: (state, track) => {
         state.track = track.payload;
      },

      enterClear: (state) => {
         state.albumPhoto = "default";
         state.album = "";
         state.author = "";
         state.dataRelease = "";
         state.track = "";
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
} = inputFieldsSlice.actions;

export default inputFieldsSlice.reducer;
