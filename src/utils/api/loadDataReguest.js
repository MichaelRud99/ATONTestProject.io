async function loadDataReguest(page) {
   const requestStorage = await fetch(
      "https://reqres.in/api/users?page=" + page
   );
   const data = await requestStorage.json();
   return data;
}

export default loadDataReguest;
