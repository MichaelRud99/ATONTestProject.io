import { put } from "redux-saga/effects";
import { requestFail } from "../slices/listComposition";

export function* checkSuccess(
   requestAnswer,
   messageSuccess = undefined,
   value = -1,
   actionSuccess = undefined
) {
   debugger;
   if (requestAnswer <= 400) {
      if (value !== -1 && actionSuccess !== undefined) {
         yield put(actionSuccess(value));
      }
      if (messageSuccess !== "") {
         yield put(messageSuccess(true));
      }
   } else {
      yield put(requestFail());
   }
}
export default checkSuccess;
