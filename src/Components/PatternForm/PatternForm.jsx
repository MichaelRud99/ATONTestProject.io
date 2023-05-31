import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import patternForm from "./patternForm.module.css";
import main from "../Main/main.module.css";
import indexCss from "../index.module.css";

import validationText from "../../utils/validation/validationText/validationText";
import ValidText from "../Validation/ValidText/ValidText";
import DownloadPhoto from "./DownloadPhoto/DownloadPhoto";
import DeleteItem from "./DeleteItem/DeleteItem";

import { useActions } from "../Hooks/useActotion";
import { loginFieldsSlice } from "../../utils/redux/slices/loginFieldsSlice";
import { interfaceActionSlice } from "../../utils/redux/slices/interfaceActionSlice";
import { selectLoginFields, selectorInterfaceEdit } from "../../utils/redux/selectors";
import ValidEmail from "../Validation/ValidEmail/ValidEmail";
import validationEmail from "../../utils/validation/validationEmail/validationEmail";

const PatternForm = ({ firstName, lastName, email, submit, index, setOpen }) => {
   const slice = useActions(interfaceActionSlice.actions);
   const outputFields = useActions(loginFieldsSlice.actions);
   const inputFields = useSelector(selectLoginFields);
   const outputFirstName = inputFields.firstName;
   const outputLastName = inputFields.lastName;
   const outputEmail = inputFields.email;
   const edit = useSelector(selectorInterfaceEdit);

   const close = () => {
      setOpen(false);
      slice.valid(true);
   };

   const editClose = () => {
      slice.edit(false);
      slice.valid(true);
      slice.open(true);
   };

   return (
      <section className={patternForm.body}>
         <div className={patternForm.move}>
            {edit === false ? (
               <button
                  onClick={close}
                  className={
                     patternForm.btn + " " + patternForm.close + " " + indexCss.transitionColor
                  }
               ></button>
            ) : (
               <Link
                  onClick={editClose}
                  className={
                     patternForm.btn + " " + patternForm.close + " " + indexCss.transitionColor
                  }
                  to="/MichaelRud99/ATONTestProject.io"
               ></Link>
            )}
         </div>
         <form className={patternForm.form}>
            <div>
               <div className={patternForm.distance}>
                  <label>Имя</label>
               </div>
               <ValidText
                  validationText={validationText}
                  initialValue={firstName}
                  outputValue={outputFirstName}
                  setValue={outputFields.enterUsername}
               />
            </div>

            <div>
               <div className={patternForm.distance}>
                  <label>Фамилия</label>
               </div>
               <ValidText
                  validationText={validationText}
                  initialValue={lastName}
                  outputValue={outputLastName}
                  setValue={outputFields.enterPassword}
               />
            </div>

            <div>
               <div className={patternForm.distance}>
                  <label>email</label>
               </div>
               <ValidEmail
                  validationEmail={validationEmail}
                  initialValue={email}
                  outputValue={outputEmail}
                  setValue={outputFields.enterEmail}
               />
            </div>
            {edit === false && <DownloadPhoto />}
            <div className={patternForm.btnFooter}>
               {edit === false ? (
                  <input
                     onClick={submit}
                     className={main.btn + " " + patternForm.add + " " + indexCss.transitionBtn}
                     defaultValue="добавить"
                     type="button"
                  ></input>
               ) : (
                  <>
                     <Link
                        onClick={submit}
                        className={
                           main.btn + " " + patternForm.change + " " + indexCss.transitionBtn
                        }
                        to="/MichaelRud99/ATONTestProject.io"
                     >
                        Изменить
                     </Link>

                     <DeleteItem index={index} />
                  </>
               )}
            </div>
         </form>
      </section>
   );
};

export default PatternForm;
