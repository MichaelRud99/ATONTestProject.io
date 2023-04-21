import React from "react";
import search from "./search.module.css";
import indexCss from "../../index.module.css";
import { useSearchParams } from "react-router-dom";
import searchLetters from "../../../utils/searchLetters/searchLetters";
import { useSelector } from "react-redux";

import { selectorListCompositionData } from "../../../utils/redux/selectors";

const Search = ({
   setStorage,
   searchValue,
   setSearchValue,
   setCheckSearch,
   setInProp,
}) => {
   let [, setSearchParams] = useSearchParams();
   const compositions = useSelector(selectorListCompositionData);

   const changes = (event) => {
      setSearchValue(event.target.value);
   };

   const submit = (event) => {
      searchValue = searchValue.toLowerCase();
      const searchId = compositions.filter((element) => element.id === searchValue);
      const SearchAuthor = compositions.map((value) => value.author.toLowerCase());
      const SearchTrack = compositions.map((value) => value.track.toLowerCase());
      const SearchAlbum = compositions.map((value) => value.album.toLowerCase());
      let currentStorage = [];
      let answer = [];
      let uniqueArray = [];

      if (event.target.value === "") {
         setInProp(false);
         setStorage(compositions);
         setCheckSearch("found");
      } else if (searchId.length > 0) {
         setStorage(searchId);
         setCheckSearch("found");
      } else if (searchLetters(searchValue, SearchAuthor).length > 0) {
         uniqueArray = searchLetters(searchValue, SearchAuthor);
         for (let w = 0; w < uniqueArray.length; w++) {
            const storageSearch = compositions.filter(
               (element) => element.author.toLowerCase() === uniqueArray[w]
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
            const storageSearch = compositions.filter(
               (element) => element.track.toLowerCase() === uniqueArray[w]
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
            const storageSearch = compositions.filter(
               (element) => element.album.toLowerCase() === uniqueArray[w]
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
