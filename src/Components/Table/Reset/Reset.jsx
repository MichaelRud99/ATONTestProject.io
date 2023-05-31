import React from "react";
import { CSSTransition } from "react-transition-group";
import reset from "./reset.module.css";
import main from "../../Main/main.module.css";
import indexCss from "../../index.module.css";
import history from "../../../utils/history/history";

import "../../transitionComponents.css";

const Reset = ({ setCheckSearch, setSearchValue, inProp, setInProp }) => {
   const rst = () => {
      history.push(`/MichaelRud99/ATONTestProject.io`);
      setSearchValue("");
      setCheckSearch("found");
      setInProp(false);
   };

   return (
      <CSSTransition in={inProp} timeout={200} classNames="my-node" mountOnEnter unmountOnExit>
         <input
            onClick={rst}
            type="button"
            className={main.btn + " " + reset.btn + " " + indexCss.transitionBtn}
            defaultValue="Сбросить"
         ></input>
      </CSSTransition>
   );
};

export default Reset;
