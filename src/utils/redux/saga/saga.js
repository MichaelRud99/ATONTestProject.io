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
} from "../slices/listComposition";
import { successRegistraton } from "../slices/interfaceActionSlice";

let requestAnswer = 0;

export function* read(number) {
   const data = yield call(loadDataReguest, number.payload);
   yield put(writeData(data));
}

export function* compressFile() {
   let gif = yield select();
   gif = gif.listComposition.gif;
   const compressedFile = yield call(requestImgCompression, gif);
   yield put(compressionGif(compressedFile));
}

export function* registrationUser(value) {
   debugger;
   value = JSON.stringify(value.payload);
   yield registrationReguest(value, "POST").then(
      (result) => (requestAnswer = result),
      (err) => (requestAnswer = err)
   );
   // console.log(requestAnswer);
   yield checkSuccess(requestAnswer, successRegistraton, value);
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
