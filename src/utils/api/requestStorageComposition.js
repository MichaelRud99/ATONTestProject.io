async function requestStorageComposition() {
   const requestStorage = await fetch("http://localhost:4200/storage");
   const data = await requestStorage.json();
   return data;
}

export default requestStorageComposition;
