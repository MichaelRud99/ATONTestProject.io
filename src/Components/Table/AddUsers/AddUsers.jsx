import React from "react";
import main from "../../Main/main.module.css";
import addUsers from "./addUsers.module.css";
import indexCss from "../../index.module.css";
import PatternForm from "../../PatternForm/PatternForm";

const AddUsers = ({ setOpen, open }) => {
   const add = () => {
      console.log("Добавили нового пользака");
   };

   return (
      <>
         <input
            onClick={() => setOpen(true)}
            type="button"
            className={
               main.btn + " " + addUsers.btn + " " + indexCss.transitionBtn
            }
            defaultValue="добавить"
         ></input>
         {open === true && (
            <PatternForm
               setOpen={setOpen}
               firstName={""}
               avatar={""}
               lastName={""}
               email={""}
               submit={add}
            />
         )}
      </>
   );
};
export default AddUsers;
