async function loadDataReguest(page = 1) {
   const requestStorage = await fetch(
      "https://reqres.in/api/users?page=" + page
   );
   const data = await requestStorage.json();
   return data;
}

export default loadDataReguest;
