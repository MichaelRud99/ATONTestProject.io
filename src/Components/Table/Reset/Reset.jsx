import React from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import reset from "./reset.module.css";
import main from "../../Main/main.module.css";
import indexCss from "../../index.module.css";
import history from "../../../utils/history/history";

import "../../transitionComponents.css";
import { selectorListCompositionData } from "../../../utils/redux/selectors";

const Reset = ({
   setCheckSearch,
   setSearchValue,
   inProp,
   setInProp,
   setStorage,
}) => {
   const compositions = useSelector(selectorListCompositionData);

   const rst = () => {
      history.push(`/monsegard3.github.io/`);
      setSearchValue("");
      setCheckSearch("found");
      setStorage(compositions);
      setInProp(false);
   };

   return (
      <CSSTransition
         in={inProp}
         timeout={200}
         classNames="my-node"
         mountOnEnter
         unmountOnExit
      >
         <input
            onClick={rst}
            type="button"
            className={
               main.btn + " " + reset.btn + " " + indexCss.transitionBtn
            }
            defaultValue="Сбросить"
         ></input>
      </CSSTransition>
   );
};

export default Reset;
