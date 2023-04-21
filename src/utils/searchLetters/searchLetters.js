const SearchAccordance = (searchValue, letters, letterSearch, count) => {
   for (let j = 0; j < searchValue.length; j++) {
      if (letters[j] === letterSearch[j]) {
         count++;
      } else {
         break;
      }
   }
   return count;
};

const searchLetters = (searchValue, value) => {
   let foundArr = [];
   const letterSearch = searchValue.split("");
   let count = 0;
   let ij = 0;
   for (let i = 0; i < value.length; i++) {
      let words = value[i].toLowerCase().split(" ");
      if (words.length > 1) {
         while (true) {
            if (words.length <= ij) {
               break;
            }
            let letters = words[ij].toLowerCase().split("");
            count = SearchAccordance(searchValue, letters, letterSearch, count);

            ij++;
         }
         ij = 0;
      } else {
         let letters = words[0].toLowerCase().split("");
         count = SearchAccordance(searchValue, letters, letterSearch, count);
      }

      if (count === searchValue.length) {
         foundArr.push(value[i]);
      }
      count = 0;
   }

   const uniqueArray = foundArr.filter(function (item, pos) {
      return foundArr.indexOf(item) === pos;
   });
   return uniqueArray;
};
export default searchLetters;
