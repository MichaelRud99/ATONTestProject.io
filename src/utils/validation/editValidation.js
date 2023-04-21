const editValidation = (editValue, originValue) => {
   if (editValue === "") {
      editValue = originValue;
   }
   return editValue;
};

export default editValidation;
