import React from "react";
import patternTr from "./patternTr.module.css";
import View from "../View/View";
import EditForm from "../Edit/EditForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PreView from "../View/PreView";
import PreEdit from "../Edit/PreEdit";

const PatternTr = ({
   storage,
   setStorage,
   index,
   id,
   author,
   track,
   album,
   albumPhoto,
   dataRelease,
   setOpen,
}) => {
   return (
      <tr>
         <td className={patternTr.id}>{id}</td>
         <td>{author}</td>
         <td>{track}</td>
         <td>{album}</td>
         <td>{dataRelease}</td>
         <BrowserRouter>
            <Routes>
               <Route
                  path="/MichaelRud99/CreateSampleMusicReact.github.io/"
                  element={
                     <>
                        <td>
                           <PreView id={id} />
                        </td>
                        <td>
                           <PreEdit id={id} />
                        </td>
                     </>
                  }
               >
                  <Route
                     path="View/:lang"
                     element={
                        <View
                           id={id}
                           author={author}
                           track={track}
                           album={album}
                           albumPhoto={albumPhoto}
                           dataRelease={dataRelease}
                        />
                     }
                  ></Route>
                  <Route
                     path="Edit/:lang"
                     element={
                        <EditForm
                           storage={storage}
                           setStorage={setStorage}
                           index={index}
                           author={author}
                           dataRelease={dataRelease}
                           track={track}
                           album={album}
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
