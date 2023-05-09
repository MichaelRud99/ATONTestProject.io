function requestLogin(data, method) {
   return new Promise((resolve, reject) => {
      const XHR = new XMLHttpRequest();

      XHR.onload = function () {
         if (XHR.status >= 400) {
            reject(XHR.status);
         } else {
            resolve(XHR.status);
         }
      };

      XHR.open(
         method,
         "https://petstore.swagger.io/v2/user/login?username=" +
            data.username +
            "&password=" +
            data.password
      );
      XHR.setRequestHeader("Content-Type", "application/json");
      XHR.send(data);
   });
}

export default requestLogin;
