import React from "react";
import deleteAll from "./deleteAll.module.css";
import main from "../../Main/main.module.css";
import indexCss from "../../index.module.css";
import { useActions } from "../../Hooks/useActotion";
import { listDataSlice } from "../../../utils/redux/slices/listData";
import { interfaceActionSlice } from "../../../utils/redux/slices/interfaceActionSlice";

const DeleteAll = () => {
   const listComposition = useActions(listDataSlice.actions);
   const interfaceAction = useActions(interfaceActionSlice.actions);
   const delet = () => {
      listComposition.clearData();
      interfaceAction.successDeleteAll(true);
      sessionStorage.clear();
   };
   return (
      <input
         onClick={delet}
         type="button"
         className={main.btn + " " + deleteAll.delete + " " + indexCss.transitionBtn}
         defaultValue="удалить всё"
      ></input>
   );
};

export default DeleteAll;
