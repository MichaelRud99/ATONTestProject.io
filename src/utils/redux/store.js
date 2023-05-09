import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/saga";
import listDataSlice from "./slices/listData";
import interfaceActionSlice from "./slices/interfaceActionSlice";
import loginFieldsSlice from "./slices/loginFieldsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
   reducer: {
      listData: listDataSlice,
      interfaceActions: interfaceActionSlice,
      loginFields: loginFieldsSlice,
   },

   middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
