import React from "react";
import { useSelector } from "react-redux";

import validationText from "../../utils/validation/validationText/validationText";
import ValidText from "../Validation/ValidText/ValidText";

import { useActions } from "../Hooks/useActotion";
import { interfaceActionSlice } from "../../utils/redux/slices/interfaceActionSlice";
import { listCompositionSlice } from "../../utils/redux/slices/listComposition";
import { loginFieldsSlice } from "../../utils/redux/slices/loginFieldsSlice";

import patternForm from "../PatternForm/patternForm.module.css";
import indexCss from "../index.module.css";
import main from "../Main/main.module.css";
import {
   selectLoginFields,
   selectorInterface,
} from "../../utils/redux/selectors";

const AuthorizationsForm = ({ setOpen }) => {
   const interfaceAction = useActions(interfaceActionSlice.actions);
   const interfaceSelector = useSelector(selectorInterface);
   const listComposition = useActions(listCompositionSlice.actions);
   const outputLoginField = useActions(loginFieldsSlice.actions);
   const loginFields = useSelector(selectLoginFields);
   const username = loginFields.username;
   const email = loginFields.email;
   const password = loginFields.password;

   const registration = (event) => {
      debugger;
      // if (validation(author, track, album, dataRelease) === true) {
      let tmp = {};
      // const cloneStorage = structuredClone(storage);
      //TODO: временный вариант
      tmp.id = Math.round(Date.now() / 1000);
      console.log(tmp.id);
      // tmp.dataRelease = dataRelease;
      // tmp.track = track;
      tmp.username = username;
      tmp.email = email;
      tmp.password = password;
      // cloneStorage[cloneStorage.length] = tmp;

      listComposition.registration(tmp);
      interfaceAction.validTrue();
      interfaceAction.openRegistrations(false);
      setOpen(false);
      // } else {
      //    slice[2].validFalse();
      //    event.preventDefault();
      // }
   };

   const login = () => {
      debugger;
      setOpen(false);
      listComposition.login({ username: username, password: password });
      interfaceAction.load(true);
   };

   const close = () => {
      setOpen(false);
      interfaceAction.validTrue();
      interfaceAction.openRegistrations(false);
   };

   return (
      <section className={patternForm.body}>
         <div className={patternForm.move}>
            <button
               onClick={close}
               className={
                  patternForm.btn +
                  " " +
                  patternForm.close +
                  " " +
                  indexCss.transitionColor
               }
            ></button>
         </div>
         <form className={patternForm.form}>
            <div>
               <div className={patternForm.distance}>
                  <label>Логин</label>
               </div>
               <ValidText
                  validationText={validationText}
                  initialValue={""}
                  outputValue={username}
                  setValue={outputLoginField.enterLogin}
               />
            </div>
            {interfaceSelector.openRegistration && (
               <div>
                  <div className={patternForm.distance}>
                     <label>Email</label>
                  </div>
                  <ValidText
                     validationText={validationText}
                     initialValue={""}
                     outputValue={email}
                     setValue={outputLoginField.enterEmail}
                  />
               </div>
            )}
            <div>
               <div className={patternForm.distance}>
                  <label>Пароль</label>
               </div>
               <ValidText
                  validationText={validationText}
                  initialValue={""}
                  outputValue={password}
                  setValue={outputLoginField.enterPassword}
               />
            </div>
         </form>
         <div className={patternForm.btnFooter}>
            {interfaceSelector.openRegistration ? (
               <input
                  onClick={registration}
                  className={
                     main.btn +
                     " " +
                     patternForm.add +
                     " " +
                     indexCss.transitionBtn
                  }
                  defaultValue="Регистрация"
                  type="button"
               ></input>
            ) : (
               <>
                  <input
                     onClick={login}
                     className={
                        main.btn +
                        " " +
                        patternForm.add +
                        " " +
                        indexCss.transitionBtn
                     }
                     defaultValue="Войти"
                     type="button"
                  ></input>

                  <input
                     onClick={() => interfaceAction.openRegistrations(true)}
                     className={
                        main.btn +
                        " " +
                        patternForm.add +
                        " " +
                        indexCss.transitionBtn
                     }
                     defaultValue="Регистрация"
                     type="button"
                  />
               </>
            )}
         </div>
      </section>
   );
};

export default AuthorizationsForm;
