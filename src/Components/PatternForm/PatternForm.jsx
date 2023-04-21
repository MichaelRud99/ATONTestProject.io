import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import patternForm from "./patternForm.module.css";
import main from "../Main/main.module.css";
import indexCss from "../index.module.css";

import validationText from "../../utils/validation/validationText/validationText";
import validationDate from "../../utils/validation/validationDate/validationDate";
import ValidText from "../Validation/ValidText/ValidText";
import ValidDate from "../Validation/ValidDate/ValidDate";
import DeleteItem from "./DeleteItem/DeleteItem";
import DownloadPhoto from "./DownloadPhoto/DownloadPhoto";

import { useActions } from "../Hooks/useActotion";
import { inputFieldsSlice } from "../../utils/redux/slices/inputFieldsSlice";
import { interfaceActionSlice } from "../../utils/redux/slices/interfaceActionSlice";
import {
   selectInputFields,
   selectorInterfaceEdit,
} from "../../utils/redux/selectors";

const PatternForm = ({
   storage,
   setStorage,
   index,
   setOpen,
   author,
   dataRelease,
   track,
   album,
   submit,
}) => {
   const slice = useActions(interfaceActionSlice.actions);
   const outputFields = useActions(inputFieldsSlice.actions);
   const inputFields = useSelector(selectInputFields);
   const outputAlbum = inputFields.album;
   const outputAuthor = inputFields.author;
   const outputDataRelease = inputFields.dataRelease;
   const outputTrack = inputFields.track;
   const edit = useSelector(selectorInterfaceEdit);

   const close = () => {
      setOpen(false);
      slice.validTrue();
   };

   const editClose = () => {
      slice.editFalse();
      slice.validTrue();
      slice.openTrue();
   };

   return (
      <section className={patternForm.body}>
         <div className={patternForm.move}>
            {edit === false ? (
               <button
                  onClick={close}
                  className={
                     patternForm.btn +
                     " " +
                     patternForm.close +
                     " " +
                     indexCss.transitionColor
                  }
               ></button>
            ) : (
               <Link
                  onClick={editClose}
                  className={
                     patternForm.btn +
                     " " +
                     patternForm.close +
                     " " +
                     indexCss.transitionColor
                  }
                  to="/MichaelRud99/CreateSampleMusicReact.github.io/"
               ></Link>
            )}
         </div>
         <form className={patternForm.form}>
            <div>
               <div className={patternForm.distance}>
                  <label>Исполнитель</label>
               </div>
               <ValidText
                  validationText={validationText}
                  initialValue={author}
                  outputValue={outputAuthor}
                  setValue={outputFields.enterAuthor}
               />
            </div>

            <div>
               <div className={patternForm.distance}>
                  <label>Дата выпуска</label>
               </div>
               <ValidDate
                  validationDate={validationDate}
                  initialValue={dataRelease}
                  outputValue={outputDataRelease}
                  setValue={outputFields.enterDataRelease}
               />
            </div>
            <div>
               <div className={patternForm.distance}>
                  <label>название композиции</label>
               </div>
               <ValidText
                  validationText={validationText}
                  initialValue={track}
                  outputValue={outputTrack}
                  setValue={outputFields.enterTrack}
               />
            </div>

            <div>
               <div className={patternForm.distance}>
                  <label>Альбом</label>
               </div>
               <ValidText
                  validationText={validationText}
                  initialValue={album}
                  outputValue={outputAlbum}
                  setValue={outputFields.enterAlbum}
               />
            </div>
            {edit === false && <DownloadPhoto />}
            <div className={patternForm.btnFooter}>
               {edit === false ? (
                  <input
                     onClick={submit}
                     className={
                        main.btn +
                        " " +
                        patternForm.add +
                        " " +
                        indexCss.transitionBtn
                     }
                     defaultValue="добавить"
                     type="button"
                  ></input>
               ) : (
                  <>
                     <Link
                        onClick={submit}
                        className={
                           main.btn +
                           " " +
                           patternForm.change +
                           " " +
                           indexCss.transitionBtn
                        }
                        to="/MichaelRud99/CreateSampleMusicReact.github.io/"
                     >
                        Изменить
                     </Link>

                     <DeleteItem
                        storage={storage}
                        index={index}
                        setStorage={setStorage}
                     />
                  </>
               )}
            </div>
         </form>
      </section>
   );
};

export default PatternForm;
