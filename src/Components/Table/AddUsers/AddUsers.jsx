import React from "react";
import main from "../../Main/main.module.css";
import addUsers from "./addUsers.module.css";
import indexCss from "../../index.module.css";
import PatternForm from "../../PatternForm/PatternForm";
import { useActions } from "../../Hooks/useActotion";
import { useSelector } from "react-redux";
import { interfaceActionSlice } from "../../../utils/redux/slices/interfaceActionSlice";
import { selectLoginFields } from "../../../utils/redux/selectors";
import { listDataSlice } from "../../../utils/redux/slices/listData";

const AddUsers = ({ setOpen, open }) => {
   const interfaceAction = useActions(interfaceActionSlice.actions);
   const listDataAction = useActions(listDataSlice.actions);
   const loginFields = useSelector(selectLoginFields);
   const firstName = loginFields.username;
   const lastName = loginFields.password;
   const email = loginFields.email;

   const add = () => {
      let tmp = {};
      tmp.id = Math.round(Date.now() / 1000);
      tmp.firstName = firstName;
      tmp.password = lastName;
      tmp.email = email;
      listDataAction.addUser(tmp);
      interfaceAction.valid(true);
      interfaceAction.openRegistrations(false);
      setOpen(false);
   };

   return (
      <>
         <input
            onClick={() => setOpen(true)}
            type="button"
            className={main.btn + " " + addUsers.btn + " " + indexCss.transitionBtn}
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
