import React from "react";
import deleteAll from "./deleteAll.module.css";
import main from "../../Main/main.module.css";
import indexCss from "../../index.module.css";
import { useActions } from "../../Hooks/useActotion";
import { listCompositionSlice } from "../../../utils/redux/slices/listComposition";

const DeleteAll = () => {
   const slice = useActions(listCompositionSlice.actions);
   const delet = () => {
      slice.clearData();
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
