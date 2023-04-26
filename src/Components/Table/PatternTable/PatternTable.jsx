import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import uniqid from "uniqid";

import AddUsers from "../AddUsers/AddUsers";
import DeleteAll from "../DeleteAll/DeleteAll";
import PatternTr from "../PatternTr/PatternTr";
import Search from "../Search/Search";
import Reset from "../Reset/Reset";
import NumberPages from "./NumberPages";
import table from "./table.module.css";

import "../../transitionComponents.css";

const PatternTable = ({ storage, setStorage, setOpen, open }) => {
   const [checkSearch, setCheckSearch] = useState("found");
   const [searchValue, setSearchValue] = useState("");
   const [inProp, setInProp] = useState(false);
   let number = Array(storage.total_pages)
      .fill()
      .map((e, i) => i + 1);

   return (
      <>
         <div className={table.frame}>
            <BrowserRouter>
               <Routes>
                  <Route
                     path="/"
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
                              <AddUsers
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
                     <th className={table.length}>Имя</th>
                     <th className={table.length}>Фамилия</th>
                     <th className={table.length}>email</th>
                     <th className={table.yearRealeas}>Фото</th>
                     <th className={table.delete}>Изменить</th>
                  </tr>
               </thead>

               <TransitionGroup component={"tbody"}>
                  {checkSearch === "found" &&
                     storage.data.map((value, index) => {
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
                                 firstName={value.first_name}
                                 lastName={value.last_name}
                                 email={value.email}
                                 albumPhoto={value.albumPhoto}
                                 avatar={value.avatar}
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
         <div className={table.numberPage}>
            «
            {number.map((value) => {
               return <NumberPages number={value} key={uniqid.time()} />;
            })}
            »
         </div>
      </>
   );
};

export default PatternTable;
