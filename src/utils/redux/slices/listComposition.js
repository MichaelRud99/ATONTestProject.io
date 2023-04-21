import { createSlice } from "@reduxjs/toolkit";

export const listCompositionSlice = createSlice({
   name: "listComposition",
   initialState: {
      data: [],
      fail: false,
      updateData: false,
      gif: [],
      gifCompress: [],
   },
   reducers: {
      writeData: (state, data) => {
         state.data = data.payload;
      },
      readData: () => {},
      submit: (state, сomposition) => {
         state.сomposition = сomposition.payload;
      },
      submtiSuccess: (state, arr) => {
         const composition = arr.payload;
         state.data.splice(state.data.length, 0, composition);
         state.updateData = !state.updateData;
      },
      requestFail: (state) => {
         state.fail = !state.fail;
      },
      edit: (state, arr) => {
         const editComposition = arr.payload;
         state.сomposition = editComposition.payload;
      },
      editSuccess: (state, arr) => {
         const composition = arr.payload[0];
         const index = arr.payload[1];
         state.data.splice(index, 1);
         state.data.splice(index, 0, composition);
         state.updateData = !state.updateData;
      },
      delet: (state, index) => {
         state.сomposition = index.payload;
      },
      deleteSuccess: (state, arr) => {
         const index = arr.payload[1];
         state.data.splice(index, 1);
         state.updateData = !state.updateData;
      },
      clearData: () => {},
      clearDataSuccess: (state) => {
         state.data = [];
         state.updateData = !state.updateData;
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
   writeData,
   readData,
   submit,
   submtiSuccess,
   requestFail,
   edit,
   editSuccess,
   delet,
   deleteSuccess,
   clearData,
   clearDataSuccess,
   fileGif,
   compressionGif,
} = listCompositionSlice.actions;

export default listCompositionSlice.reducer;
