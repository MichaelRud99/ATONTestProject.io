import { createSlice } from "@reduxjs/toolkit";

export const listCompositionSlice = createSlice({
   name: "listComposition",
   initialState: {
      data: [],
      fail: false,
      gif: [],
      gifCompress: [],
   },
   reducers: {
      login: () => {},

      writeData: (state, data) => {
         state.data = data.payload;
      },
      readData: () => {},
      //Отправляем на сервер данные
      registration: (state, сomposition) => {
         state.сomposition = сomposition.payload;
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
      },
      delet: (state, index) => {
         state.сomposition = index.payload;
      },
      deleteSuccess: (state, arr) => {
         const index = arr.payload[1];
         state.data.splice(index, 1);
      },
      clearData: (state) => {
         state.data = [];
      },
      clearDataSuccess: (state) => {
         state.data = [];
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
   registration,
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
