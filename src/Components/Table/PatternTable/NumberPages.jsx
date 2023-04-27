import { useActions } from "../../Hooks/useActotion";
import { listCompositionSlice } from "../../../utils/redux/slices/listComposition";
import { useDispatch } from "react-redux";

import index from "../../index.module.css";
import { interfaceActionSlice } from "../../../utils/redux/slices/interfaceActionSlice";

const NumberPages = ({ number }) => {
   const listComposition = useActions(listCompositionSlice.actions);
   const interfaceAction = useActions(interfaceActionSlice.actions);
   const dispatch = useDispatch();

   const trans = () => {
      dispatch(listComposition.clearData());
      dispatch(interfaceAction.load(true));
      setTimeout(() => {
         dispatch(listComposition.readData(number));
      }, 500);
   };

   return (
      <div onClick={trans} className={index.transitionColorFontSize}>
         {number}
      </div>
   );
};

export default NumberPages;
