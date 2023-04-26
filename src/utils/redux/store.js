import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/saga";
import editFieldsSlice from "./slices/editFieldsSlice";
import listCompositionSlice from "./slices/listComposition";
import interfaceActionSlice from "./slices/interfaceActionSlice";
import loginFieldsSlice from "./slices/loginFieldsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
   reducer: {
      inputFields: editFieldsSlice,
      listComposition: listCompositionSlice,
      interfaceActions: interfaceActionSlice,
      loginFields:loginFieldsSlice
   },

   middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
