function registrationReguest(data, method) {
   debugger;
   return new Promise((resolve, reject) => {
      const XHR = new XMLHttpRequest();

      XHR.onload = function () {
         if (XHR.status >= 400) {
            reject(XHR.status);
         } else {
            resolve(XHR.status);
         }
      };

      XHR.open(method, "https://petstore.swagger.io/v2/user");
      XHR.setRequestHeader("Content-Type", "application/json");
      XHR.send(data);
   });
}

export default registrationReguest;
