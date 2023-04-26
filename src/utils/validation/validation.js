import validationText from "./validationText/validationText";
import validationDate from "./validationDate/validationDate";

const validation = (firstName, lastName, email, avatar) => {
   let answer = false;
   if (
      validationText(firstName) === true &&
      validationText(lastName) === true &&
      validationText(email) === true &&
      validationDate(avatar) === true
   ) {
      answer = true;
   } else {
      answer = false;
   }
   return answer;
};

export default validation;
