import { useActions } from "../../Hooks/useActotion";
import { listCompositionSlice } from "../../../utils/redux/slices/listComposition";
import { useDispatch } from "react-redux";

import index from "../../index.module.css";

const NumberPages = ({ number }) => {
   const listComposition = useActions(listCompositionSlice.actions);
   const dispatch = useDispatch();

   return (
      <div
         onClick={() => dispatch(listComposition.readData(number))}
         className={index.transitionColorFontSize}
      >
         {number}
      </div>
   );
};

export default NumberPages;
