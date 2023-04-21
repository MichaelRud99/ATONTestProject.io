function requestDelete(id, async = true) {
   return new Promise((resolve, reject) => {
      let XHR = new XMLHttpRequest();

      XHR.onload = function () {
         if (XHR.status >= 400) {
            reject(XHR.status);
         } else {
            resolve(XHR.status);
         }
      };
      XHR.open("DELETE", "http://localhost:4200/storage/" + id, async);
      XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      XHR.send();
   });
}

export default requestDelete;
