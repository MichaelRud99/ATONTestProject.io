import { call, put, select, takeLatest } from "redux-saga/effects";
import checkSuccess from "./checkSuccess";
import loadDataReguest from "../../api/loadDataReguest";
import requests from "../../api/requests";
import requestImgCompresson from "../../api/requestImgCompression";

import {
   writeData,
   readData,
   registration,
   edit,
   delet,
   login,
   addUser,
   fileGif,
   compressionGif,
} from "../slices/listData";
import {
   successAddUser,
   successDelete,
   successEdit,
   successLogin,
   successRegistraton,
} from "../slices/interfaceActionSlice";
import requestLogin from "../../api/requestLogin";

let requestAnswer = 0;

export function* loginGenerator(loginData) {
   yield requestLogin(loginData.payload, "GET").then(
      (result) => (requestAnswer = result),
      (err) => (requestAnswer = err)
   );
   yield checkSuccess(requestAnswer, successLogin);
   if (requestAnswer === 200) {
      yield readGenerator();
   }
}

export function* readGenerator(number = 1) {
   const data = yield call(loadDataReguest, number.payload);
   yield checkSuccess(requestAnswer, "", data, writeData);
}

export function* registrationGenerator(value) {
   yield requests(value.payload, "POST").then(
      (result) => (requestAnswer = result),
      (err) => (requestAnswer = err)
   );
   yield checkSuccess(requestAnswer, successRegistraton, value.payload);
}

export function* addUserGenerator(value) {
   const userData = value.payload;
   yield requests(userData, "POST").then(
      (result) => (requestAnswer = result),
      (err) => (requestAnswer = err)
   );
   yield checkSuccess(requestAnswer, successAddUser, value.payload);
}

export function* deleteComposition(value) {
   yield requests("", "DELETE", value.payload[0]).then(
      (result) => (requestAnswer = result),
      (err) => (requestAnswer = err)
   );
   yield checkSuccess(requestAnswer, successDelete, value);
}

export function* editGenerator(value) {
   yield requests(value.payload[0], "PUT", value.payload[1]).then(
      (result) => (requestAnswer = result),
      (err) => (requestAnswer = err)
   );
   yield checkSuccess(requestAnswer, successEdit, value.payload);
}

export function* fileGifGenerator() {
   let gif = yield select();
   gif = gif.listData.gif;
   const compressedFile = yield call(requestImgCompresson, gif);
   yield put(compressionGif(compressedFile));
}

export function* watchClickSaga() {
   yield takeLatest(login, loginGenerator);
   yield takeLatest(readData, readGenerator);
   yield takeLatest(registration, registrationGenerator);
   yield takeLatest(addUser, addUserGenerator);
   yield takeLatest(delet, deleteComposition);
   yield takeLatest(edit, editGenerator);
   yield takeLatest(fileGif, fileGifGenerator);
}

export default function* rootSaga() {
   yield watchClickSaga();
}
