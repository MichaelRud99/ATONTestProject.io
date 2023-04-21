import React from "react";
import btnCreate from "./btnCreate.module.css";
import main from "../Main/main.module.css";
import CreateForm from "../CreateForm/CreateForm";
import indexCss from "../index.module.css";

const BtnCreate = ({ storage, setOpen, open }) => {
   return (
      <>
         <input
            onClick={() => setOpen(true)}
            className={
               main.btn + " " + btnCreate.btn + " " + indexCss.transitionBtn
            }
            defaultValue="создать"
            type="button"
         ></input>
         {open === true && (
            <CreateForm storage={storage} setOpen={setOpen} open={open} />
         )}
      </>
   );
};

export default BtnCreate;
