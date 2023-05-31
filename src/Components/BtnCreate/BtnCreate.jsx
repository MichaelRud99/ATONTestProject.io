import React from "react";
import btnCreate from "./btnCreate.module.css";
import main from "../Main/main.module.css";
import AuthorizationsForm from "../AuthorizationsForm/AuthorizationsForm";
import indexCss from "../index.module.css";

const BtnCreate = ({ storage, setOpen, open }) => {
   return (
      <>
         <input
            onClick={() => setOpen(true)}
            className={main.btn + " " + btnCreate.btn + " " + indexCss.transitionBtn}
            defaultValue="Авторизация"
            type="button"
         ></input>
         {open === true && <AuthorizationsForm setOpen={setOpen} />}
      </>
   );
};

export default BtnCreate;
