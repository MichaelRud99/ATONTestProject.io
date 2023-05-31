const validationEmail = (value) => {
   const re = /^[`'a-zA-Z0-9.-]+[`@]{1}[`'a-zA-Z0-9]+[`.]{1}[`a-zA-Z]+$/;
   const valid = re.test(value);
   return valid;
};

export default validationEmail;
