/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState } from "react";
import patternForm from "../patternForm.module.css";
import { useActions } from "../../Hooks/useActotion";
import { editFieldsSlice } from "../../../utils/redux/slices/editFieldsSlice";
import { listDataSlice } from "../../../utils/redux/slices/listData";
import { useSelector } from "react-redux";
import { selectorListData } from "../../../utils/redux/selectors";
import { useEffect } from "react";

const DownloadPhoto = () => {
   const inputFields = useActions(editFieldsSlice.actions);
   const listData = useSelector(selectorListData);
   const listDataAction = useActions(listDataSlice.actions);
   const inputImg = useRef(null);
   const slice = useActions(listDataSlice.actions);
   const [namePhote, setNamePhoto] = useState("добавить обложку");

   useEffect(() => {
      if (listData.gifCompress.length !== 0) {
         const reader = new FileReader();
         reader.readAsDataURL(listData.gifCompress);
         reader.onloadend = function () {
            const base64 = reader.result;
            inputFields.enterAlbumPhoto(base64);
            listDataAction.compressionGif("");
         };
      }
   }, [listData.gifCompress]);

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
