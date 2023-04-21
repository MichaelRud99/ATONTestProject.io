import { createSelector } from "reselect";
export const selectorListComposition = (state) => state.listComposition;
export const selectorListCompositionData = (state) =>
   state.listComposition.data;
export const selectorInterfaceOpen = (state) => state.interfaceActions.open;
export const selectorInterfaceEdit = (state) => state.interfaceActions.edit;
export const selectorInterfaceValid = (state) => state.interfaceActions.valid;

export const selectInputFields = createSelector(
   (state) => state.inputFields.albumPhoto,
   (state) => state.inputFields.album,
   (state) => state.inputFields.author,
   (state) => state.inputFields.dataRelease,
   (state) => state.inputFields.track,
   (albumPhoto, album, author, dataRelease, track) => ({
      album: album,
      author: author,
      dataRelease: dataRelease,
      track: track,
      albumPhoto: albumPhoto,
   })
);
