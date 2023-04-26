import React from "react";
import main from "../../Main/main.module.css";
import addUsers from "./addUsers.module.css";
import indexCss from "../../index.module.css";
import PatternForm from "../../PatternForm/PatternForm";

const AddUsers = ({ setOpen, open }) => {
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
               firstName={""}
               avatar={""}
               lastName={""}
               email={""}
               submit={""}
               setOpen={setOpen}
            />
         )}
      </>
   );
};
export default AddUsers;
