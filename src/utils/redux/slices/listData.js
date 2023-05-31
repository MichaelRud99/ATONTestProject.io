import { createSlice } from "@reduxjs/toolkit";

export const listDataSlice = createSlice({
   name: "listComposition",
   initialState: {
      data: [],
      gif: [],
      gifCompress: [],
   },
   reducers: {
      login: () => {},

      writeData: (state, data) => {
         state.data = data.payload;
      },
      readData: () => {},
      clearData: (state) => {
         state.data = [];
      },
      registration: (state, сomposition) => {
         state.сomposition = сomposition.payload;
      },
      addUser: (state, arr) => {
         const addComposition = arr.payload;
         state.сomposition = addComposition.payload;
      },
      edit: (state, arr) => {
         const addComposition = arr.payload;
         state.сomposition = addComposition.payload;
      },
      delet: (state, index) => {
         state.сomposition = index.payload;
      },
      fileGif: (state, gif) => {
         state.gif = gif.payload;
      },
      compressionGif: (state, gifCompress) => {
         state.gifCompress = gifCompress.payload;
      },
   },
});

export const {
   login,
   writeData,
   readData,
   clearData,
   registration,
   addUser,
   edit,
   delet,
   fileGif,
   compressionGif,
} = listDataSlice.actions;

export default listDataSlice.reducer;
