import { put } from "redux-saga/effects";
import { requestFail } from "../slices/listComposition";

export function* checkSuccess(
   requestAnswer,
   messageSuccess,
   value,
   actionSuccess = undefined
) {
   if (requestAnswer <= 400) {
      if (actionSuccess !== undefined) {
         yield put(actionSuccess(value.payload));
      }
      yield put(messageSuccess());
   } else {
      yield put(requestFail());
   }
}
export default checkSuccess;
