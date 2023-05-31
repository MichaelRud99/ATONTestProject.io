import { CSSTransition } from "react-transition-group";
import main from "../Main/main.module.css";
import index from "../index.module.css";
import patternForm from "../PatternForm/patternForm.module.css";

const RequestAnswerGood = ({ selector, message, action }) => {
   return (
      <CSSTransition
         in={selector}
         timeout={900}
         classNames="network-error"
         mountOnEnter
         unmountOnExit
      >
         <div className={main.registrationSuccess + " " + index.flex}>
            <div></div>
            <p>{message}</p>
            <button
               onClick={() => action(false)}
               className={patternForm.btn + " " + patternForm.close + " " + index.transitionColor}
            ></button>
         </div>
      </CSSTransition>
   );
};

export default RequestAnswerGood;
