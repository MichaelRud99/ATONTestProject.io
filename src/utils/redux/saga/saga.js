import { put, call, takeLatest, select } from "redux-saga/effects";
import checkSuccess from "./checkSuccess";
import requests from "../../api/requests";
import loadDataReguest from "../../api/loadDataReguest";
import requestImgCompression from "../../api/requestImgCompression";
import registrationReguest from "../../api/registrationReguest";
import requestDelete from "../../api/requestDelete.js";

import {
   writeData,
   readData,
   registration,
   edit,
   editSuccess,
   delet,
   deleteSuccess,
   fileGif,
   compressionGif,
   login,
} from "../slices/listComposition";
import {
   successLogin,
   successRegistraton,
} from "../slices/interfaceActionSlice";
import requestLogin from "../../api/requestLogin";

let requestAnswer = 0;

export function* loginUser(loginData) {
   debugger;
   yield requestLogin(loginData.payload, "GET").then(
      (result) => (requestAnswer = result),
      (err) => (requestAnswer = err)
   );
   yield checkSuccess(requestAnswer, successLogin);
   if (requestAnswer === 200) {
      yield read();
   }
}

export function* read(number = 1) {
   debugger;
   const data = yield call(loadDataReguest, number.payload);
   yield checkSuccess(requestAnswer, "", data, writeData);
}

export function* compressFile() {
   let gif = yield select();
   gif = gif.listComposition.gif;
   const compressedFile = yield call(requestImgCompression, gif);
   yield put(compressionGif(compressedFile));
}

export function* registrationUser(value) {
   yield registrationReguest(value.payload, "POST").then(
      (result) => (requestAnswer = result),
      (err) => (requestAnswer = err)
   );
   // console.log(requestAnswer);
   yield checkSuccess(requestAnswer, successRegistraton, value.payload);
}

// export function* clearDataGenerator() {
//    const data = yield call(loadDataReguest);
//    yield data.forEach((value) => {
//       requestDelete(value.id, false).then(
//          (result) => (requestAnswer = result),
//          (err) => (requestAnswer = err)
//       );
//    });
//    yield checkSuccess(requestAnswer, clearDataSuccess, []);
// }

export function* deleteComposition(value) {
   yield requestDelete(value.payload[0]).then(
      (result) => (requestAnswer = result),
      (err) => (requestAnswer = err)
   );
   yield checkSuccess(requestAnswer, deleteSuccess, value);
}

export function* editComposition(value) {
   yield requests(value.payload[0], "PUT", value.payload[0].id).then(
      (result) => (requestAnswer = result),
      (err) => (requestAnswer = err)
   );
   yield checkSuccess(requestAnswer, editSuccess, value);
}

export function* watchClickSaga() {
   yield takeLatest(login, loginUser);
   yield takeLatest(readData, read);
   yield takeLatest(registration, registrationUser);
   // yield takeLatest(clearData, clearDataGenerator);
   yield takeLatest(delet, deleteComposition);
   yield takeLatest(edit, editComposition);
   yield takeLatest(fileGif, compressFile);
}

export default function* rootSaga() {
   yield watchClickSaga();
}
