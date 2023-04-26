import { createSelector } from "reselect";
export const selectorListComposition = (state) => state.listComposition;
export const selectorListCompositionData = (state) =>
   state.listComposition.data;
export const selectorInterfaceOpen = (state) => state.interfaceActions.open;
export const selectorInterfaceEdit = (state) => state.interfaceActions.edit;
export const selectorInterfaceValid = (state) => state.interfaceActions.valid;
export const selectorInterface = (state) => state.interfaceActions;

export const selectInputFields = createSelector(
   (state) => state.inputFields.albumPhoto,
   (state) => state.inputFields.email,
   (state) => state.inputFields.firstName,
   (state) => state.inputFields.avatar,
   (state) => state.inputFields.lastName,
   (albumPhoto, email, firstName, avatar, lastName) => ({
      email: email,
      firstName: firstName,
      avatar: avatar,
      lastName: lastName,
      albumPhoto: albumPhoto,
   })
);

export const selectLoginFields = createSelector(
   (state) => state.loginFields.username,
   (state) => state.loginFields.email,
   (state) => state.loginFields.password,
   (username, email, password) => ({
      username: username,
      email: email,
      password: password,
   })
);
