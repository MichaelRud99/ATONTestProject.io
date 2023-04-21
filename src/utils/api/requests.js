function requests(data, method, id) {
   return new Promise((resolve, reject) => {
      const XHR = new XMLHttpRequest();

      XHR.onload = function () {
         if (XHR.status >= 400) {
            reject(XHR.status);
         } else {
            resolve(XHR.status);
         }
      };

      let urlEncodedData = "",
         urlEncodedDataPairs = [],
         name;

      for (name in data) {
         urlEncodedDataPairs.push(
            encodeURIComponent(name) + "=" + encodeURIComponent(data[name])
         );
      }
      urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");
      if (id === undefined) {
         XHR.open(method, "http://localhost:4200/storage");
      } else {
         XHR.open(method, "http://localhost:4200/storage/" + id);
      }
      XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      XHR.send(urlEncodedData);
   });
}

export default requests;
