function requests(data, method, idUser) {
   return new Promise((resolve, reject) => {
      const XHR = new XMLHttpRequest();

      XHR.onload = function () {
         if (XHR.status >= 400) {
            reject(XHR.status);
         } else {
            resolve(XHR.status);
         }
      };

      if (idUser !== undefined) {
         XHR.open(method, "https://reqres.in/api/users/" + idUser);
      } else {
         XHR.open(method, "https://reqres.in/api/users/");
      }

      XHR.setRequestHeader("Access-Control-Allow-Origin", "https://reqres.in/api.com");
      XHR.setRequestHeader("Access-Control-Allow-Credentials", "true");
      XHR.setRequestHeader(
         "Access-Control-Allow-Headers",
         "Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken"
      );
      XHR.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
      XHR.send(data);
   });
}

export default requests;
