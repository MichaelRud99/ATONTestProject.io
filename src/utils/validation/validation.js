import validationText from "./validationText/validationText";
import validationEmail from "./validationEmail/validationEmail";

const validation = (firstName, lastName, email = "email@gmail.com") => {
   let answer = false;
   debugger;
   if (
      validationText(firstName) === true &&
      validationText(lastName) === true &&
      validationEmail(email) === true
   ) {
      answer = true;
   } else {
      answer = false;
   }
   return answer;
};

export default validation;
