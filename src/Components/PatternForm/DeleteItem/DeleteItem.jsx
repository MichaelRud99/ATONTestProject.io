import React from "react";
import { Link } from "react-router-dom";
import main from "../../Main/main.module.css";
import deleteItem from "./deleteItem.module.css";
import indexCss from "../../index.module.css";
import { useActions } from "../../Hooks/useActotion";
import { listDataSlice } from "../../../utils/redux/slices/listData";
import { interfaceActionSlice } from "../../../utils/redux/slices/interfaceActionSlice";

const DeleteItem = ({ index }) => {
   const slice = useActions([listDataSlice.actions, interfaceActionSlice.actions]);

   const delet = () => {
      slice[0].delet(index);
      slice[1].edit(false);
      slice[1].open(true);
   };

   return (
      <Link
         onClick={delet}
         className={main.btn + " " + deleteItem.delete + " " + indexCss.transitionBtn}
         to="/MichaelRud99/ATONTestProject.io"
      >
         Удалить
      </Link>
   );
};

export default DeleteItem;
