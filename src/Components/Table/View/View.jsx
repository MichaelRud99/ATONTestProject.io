import React, { useState } from "react";
import main from "../../Main/main.module.css";
import viewCss from "./view.module.css";
import indexCss from "../../index.module.css";
import { Link } from "react-router-dom";
import { useActions } from "../../Hooks/useActotion";
import { interfaceActionSlice } from "../../../utils/redux/slices/interfaceActionSlice";

const View = ({ id, author, dataRelease, track, album, albumPhoto }) => {
   const [view, setView] = useState(true);
   const slice = useActions(interfaceActionSlice.actions);

   const close = () => {
      setView(false);
      slice.openTrue();
   };

   return (
      <>
         {view === true && (
            <section className={viewCss.window}>
               <div className={viewCss.flex}>
                  <img
                     id="img"
                     className={viewCss.img}
                     src={
                        albumPhoto.length < 10
                           ? "https://lastfm.freetls.fastly.net/i/u/ar0/6e303c647ed69c7dd3f1f4352f019b6f.jpg"
                           : albumPhoto
                     }
                     alt="album"
                  />
                  <span className={viewCss.list + " " + viewCss.flex}>
                     <div className={viewCss.grid}>
                        <label>id</label>
                        <label>{id}</label>
                     </div>
                     <div className={viewCss.grid}>
                        <label>Исполнитель</label>
                        <label>{author}</label>
                     </div>
                     <div className={viewCss.grid}>
                        <label>название композиции</label>
                        <label>{track}</label>
                     </div>
                     <div className={viewCss.grid}>
                        <label>Альбом</label>
                        <label>{album}</label>
                     </div>
                     <div className={viewCss.grid}>
                        <label>Дата выпуска</label>
                        <label>{dataRelease}</label>
                     </div>
                  </span>
               </div>
               <div>
                  <Link
                     onClick={close}
                     className={
                        main.btn +
                        " " +
                        viewCss.close +
                        " " +
                        indexCss.transitionBtn
                     }
                     to="/MichaelRud99/CreateSampleMusicReact.github.io/"
                  >
                     Закрыть
                  </Link>
               </div>
            </section>
         )}
      </>
   );
};
export default View;
