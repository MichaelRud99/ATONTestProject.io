import validationText from "./validationText/validationText";
import validationDate from "./validationDate/validationDate";

const validation = (author, track, album, dataRelease) => {
   let answer = false;
   if (
      validationText(author) === true &&
      validationText(track) === true &&
      validationText(album) === true &&
      validationDate(dataRelease) === true
   ) {
      answer = true;
   } else {
      answer = false;
   }
   return answer;
};

export default validation;
