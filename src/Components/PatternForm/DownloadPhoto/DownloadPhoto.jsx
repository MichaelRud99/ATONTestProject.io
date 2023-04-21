/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState } from "react";
import patternForm from "../patternForm.module.css";
import { useActions } from "../../Hooks/useActotion";
import { inputFieldsSlice } from "../../../utils/redux/slices/inputFieldsSlice";
import { listCompositionSlice } from "../../../utils/redux/slices/listComposition";
import { useSelector } from "react-redux";
import { selectorListComposition } from "../../../utils/redux/selectors";
import { useEffect } from "react";

const DownloadPhoto = () => {
   const inputFields = useActions(inputFieldsSlice.actions);
   const compositions = useSelector(selectorListComposition);
   const compositionsAction = useActions(listCompositionSlice.actions);
   const inputImg = useRef(null);
   const slice = useActions(listCompositionSlice.actions);
   const [namePhote, setNamePhoto] = useState("добавить обложку");

   useEffect(() => {
      if (compositions.gifCompress.length !== 0) {
         const reader = new FileReader();
         reader.readAsDataURL(compositions.gifCompress);
         reader.onloadend = function () {
            const base64 = reader.result;
            inputFields.enterAlbumPhoto(base64);
            compositionsAction.compressionGif("");
         };
      }
   }, [compositions.gifCompress]);

   const download = () => {
      inputImg.current.onchange = () => {
         const img = inputImg.current.files[0];
         setNamePhoto(img.name);
         slice.fileGif(img);
      };
   };

   return (
      <>
         <div className={patternForm.flex}>
            <div>
               <div className={patternForm.flex}>
                  <span className={patternForm.addPhoto}></span>
                  <p id="paragraf" className={patternForm.paragraf}>
                     {namePhote}
                  </p>
               </div>
            </div>

            <input
               accept="image/*"
               type="file"
               ref={inputImg}
               className={patternForm.inputImg}
               onClick={download}
            />
         </div>
      </>
   );
};

export default DownloadPhoto;
