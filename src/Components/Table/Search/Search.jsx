import React from "react";
import search from "./search.module.css";
import indexCss from "../../index.module.css";
import { useSearchParams } from "react-router-dom";
import searchLetters from "../../../utils/searchLetters/searchLetters";
import { useSelector } from "react-redux";

import { selectorListDataData } from "../../../utils/redux/selectors";

const Search = ({ setStorage, searchValue, setSearchValue, setCheckSearch, setInProp }) => {
   let [, setSearchParams] = useSearchParams();
   const listData = useSelector(selectorListDataData);

   const changes = (event) => {
      setSearchValue(event.target.value);
   };

   const submit = (event) => {
      searchValue = searchValue.toLowerCase();
      const searchId = listData.filter((element) => element.id === searchValue);
      const SearchAuthor = listData.map((value) => value.firstName.toLowerCase());
      const SearchTrack = listData.map((value) => value.lastName.toLowerCase());
      const SearchAlbum = listData.map((value) => value.email.toLowerCase());
      let currentStorage = [];
      let answer = [];
      let uniqueArray = [];

      if (event.target.value === "") {
         setInProp(false);
         setStorage(listData);
         setCheckSearch("found");
      } else if (searchId.length > 0) {
         setStorage(searchId);
         setCheckSearch("found");
      } else if (searchLetters(searchValue, SearchAuthor).length > 0) {
         uniqueArray = searchLetters(searchValue, SearchAuthor);
         for (let w = 0; w < uniqueArray.length; w++) {
            const storageSearch = listData.filter(
               (element) => element.firstName.toLowerCase() === uniqueArray[w]
            );
            answer = currentStorage.concat(storageSearch);
            currentStorage = answer;
         }
         setStorage(answer);
         setCheckSearch("found");
         setInProp(true);
      } else if (searchLetters(searchValue, SearchTrack).length > 0) {
         uniqueArray = searchLetters(searchValue, SearchTrack);
         for (let w = 0; w < uniqueArray.length; w++) {
            const storageSearch = listData.filter(
               (element) => element.lastName.toLowerCase() === uniqueArray[w]
            );
            answer = currentStorage.concat(storageSearch);
            currentStorage = answer;
         }
         setStorage(answer);
         setCheckSearch("found");
         setInProp(true);
      } else if (searchLetters(searchValue, SearchAlbum).length > 0) {
         uniqueArray = searchLetters(searchValue, SearchAlbum);
         for (let w = 0; w < uniqueArray.length; w++) {
            const storageSearch = listData.filter(
               (element) => element.email.toLowerCase() === uniqueArray[w]
            );
            answer = currentStorage.concat(storageSearch);
            currentStorage = answer;
         }
         setStorage(answer);
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
