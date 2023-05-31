import { CSSTransition } from "react-transition-group";

import main from "../Main/main.module.css";
import index from "../index.module.css";
import patternForm from "../PatternForm/patternForm.module.css";

const RequestAnswerBad = ({ selector, message, action }) => {
   let errorDescription;

   switch (selector[0]) {
      case 404:
         errorDescription = "404: Not Found";
         break;
      case 408:
         errorDescription = "408: Request Timeout";
         break;
      case 500:
         errorDescription = "500: Internal Server Error";
         break;
      case 502:
         errorDescription = "502: Bad Gateway";
         break;
      default:
         errorDescription = "";
         break;
   }

   return (
      <CSSTransition
         in={selector[1]}
         timeout={50}
         classNames="network-error"
         mountOnEnter
         unmountOnExit
      >
         <div className={main.networkError + " " + index.flex}>
            <div></div>
            <p>
               {message}
               {errorDescription}
            </p>
            <button
               onClick={() => action([selector[0], false])}
               className={patternForm.btn + " " + patternForm.close + " " + index.transitionColor}
            ></button>
         </div>
      </CSSTransition>
   );
};

export default RequestAnswerBad;
