import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EditForm from "../Edit/EditForm";
import PreEdit from "../Edit/PreEdit";

import patternTr from "./patternTr.module.css";

const PatternTr = ({
   storage,
   index,
   id,
   firstName,
   lastName,
   email,
   avatar,
   setOpen,
}) => {
   return (
      <tr>
         <td className={patternTr.id}>{id}</td>
         <td>{firstName}</td>
         <td>{lastName}</td>
         <td>{email}</td>
         <td>
            <img src={avatar} alt="" />
         </td>
         <BrowserRouter>
            <Routes>
               <Route
                  path="/MichaelRud99/ATONTestProject.io"
                  element={
                     <>
                        <td>
                           <PreEdit id={id} />
                        </td>
                     </>
                  }
               >
                  <Route
                     path="/MichaelRud99/ATONTestProject.ioEdit/:lang"
                     element={
                        <EditForm
                           storage={storage}
                           index={index}
                           firstName={firstName}
                           lastName={lastName}
                           email={email}
                           setOpen={setOpen}
                        />
                     }
                  ></Route>
               </Route>
            </Routes>
         </BrowserRouter>
      </tr>
   );
};
export default PatternTr;
