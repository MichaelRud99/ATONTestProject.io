import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import table from "./table.module.css";
import AddMusic from "../AddMusic/AddMusic";
import DeleteAll from "../DeleteAll/DeleteAll";
import PatternTr from "../PatternTr/PatternTr";
import Search from "../Search/Search";
import Reset from "../Reset/Reset";

import "../../transitionComponents.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PatternTable = ({ storage, setStorage, setOpen, open }) => {
   const [checkSearch, setCheckSearch] = useState("found");
   const [searchValue, setSearchValue] = useState("");
   const [inProp, setInProp] = useState(false);

   return (
      <div className={table.frame}>
         <BrowserRouter>
            <Routes>
               <Route
                  path="/MichaelRud99/CreateSampleMusicReact.github.io/"
                  element={
                     <div className={table.flex}>
                        <Search
                           setStorage={setStorage}
                           setCheckSearch={setCheckSearch}
                           searchValue={searchValue}
                           setSearchValue={setSearchValue}
                           setInProp={setInProp}
                        />

                        <div className={table.divBtn}>
                           <Reset
                              setCheckSearch={setCheckSearch}
                              setSearchValue={setSearchValue}
                              inProp={inProp}
                              setInProp={setInProp}
                              setStorage={setStorage}
                           />
                           <DeleteAll />
                           <AddMusic
                              storage={storage}
                              setOpen={setOpen}
                              open={open}
                           />
                        </div>
                     </div>
                  }
               />
            </Routes>
         </BrowserRouter>

         <table className={table.table}>
            <thead>
               <tr>
                  <th className={table.id}>id</th>
                  <th className={table.length}>Исполнитель</th>
                  <th className={table.length}>Название композиции</th>
                  <th className={table.length}>Альбом</th>
                  <th className={table.yearRealeas}>Год релиза</th>
                  <th className={table.fastView}>Просмотр</th>
                  <th className={table.delete}>Изменить</th>
               </tr>
            </thead>

            <TransitionGroup component={"tbody"}>
               {checkSearch === "found" &&
                  storage.map((value, index) => {
                     return (
                        <CSSTransition
                           key={value.id}
                           timeout={300}
                           classNames="my-node"
                        >
                           <PatternTr
                              storage={storage}
                              setStorage={setStorage}
                              key={value.id}
                              id={value.id}
                              index={index}
                              author={value.author}
                              track={value.track}
                              album={value.album}
                              albumPhoto={value.albumPhoto}
                              dataRelease={value.dataRelease}
                              setOpen={setOpen}
                           />
                        </CSSTransition>
                     );
                  })}
            </TransitionGroup>
         </table>

         {checkSearch === "notFound" && (
            <div className={table.notFound}>
               По вашему запросу ничего не найдено
            </div>
         )}
      </div>
   );
};

export default PatternTable;
