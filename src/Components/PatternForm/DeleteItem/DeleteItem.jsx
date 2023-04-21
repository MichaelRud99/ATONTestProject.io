import React from "react";
import { Link } from "react-router-dom";
import main from "../../Main/main.module.css";
import deleteItem from "./deleteItem.module.css";
import indexCss from "../../index.module.css";
import { useActions } from "../../Hooks/useActotion";
import { listCompositionSlice } from "../../../utils/redux/slices/listComposition";
import { interfaceActionSlice } from "../../../utils/redux/slices/interfaceActionSlice";

const DeleteItem = ({ storage, setStorage, index }) => {
   const slice = useActions([
      listCompositionSlice.actions,
      interfaceActionSlice.actions,
   ]);

   const delet = () => {
      const cloneStorage = structuredClone(storage);
      slice[0].delet([cloneStorage[index].id, index]);
      slice[0].readData();
      cloneStorage.splice(index, 1);
      setStorage(cloneStorage);
      slice[1].editFalse();
      slice[1].openTrue();
   };

   return (
      <Link
         onClick={delet}
         className={
            main.btn + " " + deleteItem.delete + " " + indexCss.transitionBtn
         }
         to="/MichaelRud99/CreateSampleMusicReact.github.io/"
      >
         Удалить
      </Link>
   );
};

export default DeleteItem;
