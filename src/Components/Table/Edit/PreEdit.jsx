import React from "react";
import editCss from "./edit.module.css";
import patternForm from "../../PatternForm/patternForm.module.css";
import { Link, Outlet } from "react-router-dom";
import { interfaceActionSlice } from "../../../utils/redux/slices/interfaceActionSlice";

import { useActions } from "../../Hooks/useActotion";
import { useSelector } from "react-redux";
import { selectorInterfaceOpen } from "../../../utils/redux/selectors";

const PreEdit = ({ id }) => {
   const slice = useActions(interfaceActionSlice.actions);
   const open = useSelector(selectorInterfaceOpen);

   const tmp = () => {
      slice.editTrue();
      slice.openFalse();
   };

   return (
      <>
         {open === true ? (
            <>
               <Link
                  onClick={tmp}
                  className={patternForm.btn + " " + editCss.edit}
                  to={`/Edit/${id}`}
               ></Link>
            </>
         ) : (
            <span className={patternForm.btn + " " + editCss.fakeEdit}></span>
         )}
         <Outlet />
      </>
   );
};

export default PreEdit;
