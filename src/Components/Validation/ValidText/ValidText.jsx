import React from "react";
import validation from "../validation.module.css";
import { useSelector } from "react-redux";
import editValidation from "../../../utils/validation/editValidation";
import {
   selectorInterfaceEdit,
   selectorInterfaceValid,
} from "../../../utils/redux/selectors";

const  ValidText = ({ validationText, initialValue, outputValue, setValue }) => {
   const edit = useSelector(selectorInterfaceEdit);
   const validFail = useSelector(selectorInterfaceValid);

   if (edit === true) {
      outputValue = editValidation(outputValue, initialValue);
   }

   const changeValue = (event) => {
      setValue(event.target.value);
   };

   return (
      <>
         <input
            defaultValue={initialValue}
            onChange={changeValue}
            type="text"
            className={
               validationText(outputValue) === false && validFail === false
                  ? validation.input + " " + validation.error
                  : validation.input
            }
         ></input>
         <>
            {validationText(outputValue) === false && validFail === false && (
               <div
                  className={validation.distance + " " + validation.validation}
               >
                  <label>Используются неккоректные символы!</label>
               </div>
            )}
         </>
      </>
   );
};
export default ValidText;
