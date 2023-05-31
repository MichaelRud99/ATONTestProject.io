import React from "react";
import { useSelector } from "react-redux";

import validationText from "../../utils/validation/validationText/validationText";
import validationEmail from "../../utils/validation/validationEmail/validationEmail";
import ValidText from "../Validation/ValidText/ValidText";
import ValidEmail from "../Validation/ValidEmail/ValidEmail";
import validation from "../../utils/validation/validation";

import { useActions } from "../Hooks/useActotion";
import { interfaceActionSlice } from "../../utils/redux/slices/interfaceActionSlice";
import { listDataSlice } from "../../utils/redux/slices/listData";
import { loginFieldsSlice } from "../../utils/redux/slices/loginFieldsSlice";

import patternForm from "../PatternForm/patternForm.module.css";
import indexCss from "../index.module.css";
import main from "../Main/main.module.css";
import { selectLoginFields, selectorInterface } from "../../utils/redux/selectors";

const AuthorizationsForm = ({ setOpen }) => {
   const interfaceAction = useActions(interfaceActionSlice.actions);
   const interfaceSelector = useSelector(selectorInterface);
   const listComposition = useActions(listDataSlice.actions);
   const outputLoginField = useActions(loginFieldsSlice.actions);
   const loginFields = useSelector(selectLoginFields);
   const username = loginFields.username;
   const email = loginFields.email;
   const password = loginFields.password;

   const registration = (event) => {
      debugger;
      console.log("username", username, password, email);
      if (validation(username, password, email) === true) {
         let tmp = {};
         tmp.id = Math.round(Date.now() / 1000);
         console.log(tmp.id);
         tmp.username = username;
         tmp.email = email;
         tmp.password = password;

         listComposition.registration(tmp);
         interfaceAction.valid(true);
         interfaceAction.openRegistrations(false);
         setOpen(false);
      } else {
         interfaceAction.valid(false);
         event.preventDefault();
      }
   };

   const login = (event) => {
      debugger;
      if (validation(username, password) === true) {
         interfaceAction.valid(true);
         setOpen(false);
         listComposition.login({ username: username, password: password });
         interfaceAction.load(true);
      } else {
         interfaceAction.valid(false);
         event.preventDefault();
      }
   };

   const close = () => {
      setOpen(false);
      interfaceAction.valid(true);
      interfaceAction.openRegistrations(false);
   };

   return (
      <section className={patternForm.body}>
         <div className={patternForm.move}>
            <button
               onClick={close}
               className={
                  patternForm.btn + " " + patternForm.close + " " + indexCss.transitionColor
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
                  setValue={outputLoginField.enterUsername}
               />
            </div>
            {interfaceSelector.openRegistration && (
               <div>
                  <div className={patternForm.distance}>
                     <label>Email</label>
                  </div>
                  <ValidEmail
                     validationEmail={validationEmail}
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
                  className={main.btn + " " + patternForm.add + " " + indexCss.transitionBtn}
                  defaultValue="Регистрация"
                  type="button"
               ></input>
            ) : (
               <>
                  <input
                     onClick={login}
                     className={main.btn + " " + patternForm.add + " " + indexCss.transitionBtn}
                     defaultValue="Войти"
                     type="button"
                  ></input>

                  <input
                     onClick={() => interfaceAction.openRegistrations(true)}
                     className={main.btn + " " + patternForm.add + " " + indexCss.transitionBtn}
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
