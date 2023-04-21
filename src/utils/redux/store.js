import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/saga";
import inputFieldsSlice from "./slices/inputFieldsSlice";
import listCompositionSlice from "./slices/listComposition"
import interfaceActionSlice from "./slices/interfaceActionSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
   reducer: {
      inputFields: inputFieldsSlice,
      listComposition:listCompositionSlice,
      interfaceActions:interfaceActionSlice,
   },

   middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
