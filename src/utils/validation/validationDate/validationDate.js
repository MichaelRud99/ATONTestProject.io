const validationDate = (value) => {
   if (value === undefined || value==="") {
      return false;
   } else {
      return true;
   }
};

export default validationDate;
