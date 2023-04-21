import { put } from "redux-saga/effects";
import { requestFail } from "../slices/listComposition";

export function* checkSuccess(requestAnswer, actionSuccess, value) {
   if (requestAnswer <= 400) {
      yield put(actionSuccess(value.payload));
   } else {
      yield put(requestFail());
   }
}
export default checkSuccess;
