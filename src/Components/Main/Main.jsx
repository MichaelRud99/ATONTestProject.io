/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/";
import { useActions } from "../Hooks/useActotion";
import { listCompositionSlice } from "../../utils/redux/slices/listComposition";
import main from "./main.module.css";
import BtnCreate from "../BtnCreate";
import PatternTable from "../Table/PatternTable/PatternTable";

import { CSSTransition } from "react-transition-group";
import "../transitionComponents.css";
import { selectorListComposition } from "../../utils/redux/selectors";
import Footer from "../Footer/Footer";

const Main = () => {
   const compositions = useSelector(selectorListComposition);
   const slice = useActions(listCompositionSlice.actions);
   const [isOpen, setOpen] = useState(false);
   const [storage, setStorage] = useState("");

   useEffect(() => {
      slice.readData();
      setStorage(compositions.data);
   }, [compositions.data.length, compositions.updateData]);

   useEffect(() => {
      if (compositions.fail === true) {
         setTimeout(() => {
            slice.requestFail();
         }, 4000);
      }
   }, [compositions.fail]);

   return (
      <>
         {storage.length === 0 ? (
            <section className={main.flex}>
               <h1 className={main.title}>
                  Создайте свою подборку музыкальных произведений
               </h1>
               <BtnCreate storage={storage} setOpen={setOpen} open={isOpen} />
               <Footer />
            </section>
         ) : (
            <section className={main.section}>
               <div className={main.subtitle}>
                  Выборка данных
               </div>
               <PatternTable
                  storage={storage}
                  setStorage={setStorage}
                  setOpen={setOpen}
                  open={isOpen}
               />
               <Footer />
            </section>
         )}
         <CSSTransition
            in={compositions.fail}
            timeout={900}
            classNames="network-error"
            mountOnEnter
            unmountOnExit
         >
            <div className={main.networkError}>
               Ошибка: неудалось отправить запрос
            </div>
         </CSSTransition>
      </>
   );
};
export default Main;
