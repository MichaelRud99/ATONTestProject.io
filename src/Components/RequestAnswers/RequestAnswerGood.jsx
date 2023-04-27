import { CSSTransition } from "react-transition-group";
import main from "../Main/main.module.css";
import index from "../index.module.css";
const RequestAnswerGood = ({ action, message }) => {
   return (
      <CSSTransition
         in={action}
         timeout={900}
         classNames="network-error"
         mountOnEnter
         unmountOnExit
      >
         <div className={main.registrationSuccess + " " + index.flex}>
            <div></div>
            <p>{message}</p>
         </div>
      </CSSTransition>
   );
};

export default RequestAnswerGood;
