import React from "react";
import deleteAll from "./deleteAll.module.css";
import main from "../../Main/main.module.css";
import indexCss from "../../index.module.css";
import { useActions } from "../../Hooks/useActotion";
import { listCompositionSlice } from "../../../utils/redux/slices/listComposition";
import { interfaceActionSlice } from "../../../utils/redux/slices/interfaceActionSlice";

const DeleteAll = () => {
   const listComposition = useActions(listCompositionSlice.actions);
   const interfaceAction = useActions(interfaceActionSlice.actions);
   const delet = () => {
      listComposition.clearData();
      interfaceAction.successDelete();
   };
   return (
      <input
         onClick={delet}
         type="button"
         className={
            main.btn + " " + deleteAll.delete + " " + indexCss.transitionBtn
         }
         defaultValue="удалить всё"
      ></input>
   );
};

export default DeleteAll;
