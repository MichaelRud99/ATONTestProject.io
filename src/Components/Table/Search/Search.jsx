import React from "react";
import search from "./search.module.css";
import indexCss from "../../index.module.css";
import { useSearchParams } from "react-router-dom";
import searchLetters from "../../../utils/searchLetters/searchLetters";
import { useSelector } from "react-redux";

import { selectorListDataData } from "../../../utils/redux/selectors";

const Search = ({ setStorage, setSearchValue, searchValue, setCheckSearch, setInProp }) => {
   let [, setSearchParams] = useSearchParams();
   const listData = useSelector(selectorListDataData);

   const changes = (event) => {
      setSearchValue(event.target.value);
   };

   const submit = (event) => {
      searchValue = searchValue.toLowerCase();
      const searchId = listData.data.filter((element) =>element.id === searchValue*1);
      const SearchAuthor = listData.data.map((value) => value.first_name.toLowerCase());
      const SearchTrack = listData.data.map((value) => value.last_name.toLowerCase());
      const SearchAlbum = listData.data.map((value) => value.email.toLowerCase());
      let currentStorage = [];
      let answer = [];
      let uniqueArray = [];
      if (event.target.value === "") {
         setInProp(false);
         setStorage(listData);
         setCheckSearch("found");
      } else if (searchId.length > 0) {
         setStorage({ data: searchId });
         setCheckSearch("found");
      } else if (searchLetters(searchValue, SearchAuthor).length > 0) {

         uniqueArray = searchLetters(searchValue, SearchAuthor);
         for (let w = 0; w < uniqueArray.length; w++) {
            const storageSearch = listData.data.filter(
               (element) => element.first_name.toLowerCase() === uniqueArray[w]
            );
            answer = currentStorage.concat(storageSearch);
            currentStorage = answer;
         }
         setStorage({ data: answer });
         setCheckSearch("found");
         setInProp(true);
      } else if (searchLetters(searchValue, SearchTrack).length > 0) {
         uniqueArray = searchLetters(searchValue, SearchTrack);
         for (let w = 0; w < uniqueArray.length; w++) {
            const storageSearch = listData.data.filter(
               (element) => element.last_name.toLowerCase() === uniqueArray[w]
            );
            answer = currentStorage.concat(storageSearch);
            currentStorage = answer;
         }
         setStorage({ data: answer });
         setCheckSearch("found");
         setInProp(true);
      } else if (searchLetters(searchValue, SearchAlbum).length > 0) {
         uniqueArray = searchLetters(searchValue, SearchAlbum);
         for (let w = 0; w < uniqueArray.length; w++) {
            const storageSearch = listData.data.filter(
               (element) => element.email.toLowerCase() === uniqueArray[w]
            );
            answer = currentStorage.concat(storageSearch);
            currentStorage = answer;
         }
         setStorage({ data: answer });
         setCheckSearch("found");
         setInProp(true);
      } else {
         setInProp(true);
         setCheckSearch("notFound");
      }

      let Search = searchValue;
      if (Search) {
         setSearchParams({ Search });
      } else {
         setSearchParams({});
      }
   };

   const keyUp = (event) => {
      if (event.code === "Enter") {
         submit(event);
      }
   };

   return (
      <div className={search.div_border}>
         <button
            className={search.img + " " + indexCss.transitionOpacity}
            onClick={() => document.querySelector("input").focus()}
         />
         <input
            type="text"
            placeholder="поиск..."
            onChange={changes}
            value={searchValue}
            className={search.input + " " + indexCss.transitionColor}
            onKeyDownCapture={keyUp}
         />
      </div>
   );
};

export default Search;
