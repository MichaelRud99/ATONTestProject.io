/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/";
import { useActions } from "../Hooks/useActotion";
import { listCompositionSlice } from "../../utils/redux/slices/listComposition";
import main from "./main.module.css";
import index from "../index.module.css";
import BtnCreate from "../BtnCreate";
import PatternTable from "../Table/PatternTable/PatternTable";

import { CSSTransition } from "react-transition-group";
import "../transitionComponents.css";
import {
   selectorInterface,
   selectorListComposition,
} from "../../utils/redux/selectors";
import Footer from "../Footer/Footer";
import { interfaceActionSlice } from "../../utils/redux/slices/interfaceActionSlice";

const Main = () => {
   const compositions = useSelector(selectorListComposition);
   const interfaceAction = useSelector(selectorInterface);
   const slice = useActions(listCompositionSlice.actions);
   const interfaceSlice = useActions(interfaceActionSlice.actions);
   const [isOpen, setOpen] = useState(false);
   const [storage, setStorage] = useState("");

   useEffect(() => {
      // slice.readData();
      debugger
      setStorage(compositions.data);
   }, [compositions.data.length,compositions.data.page]);

   useEffect(() => {
      if (compositions.fail === true) {
         setTimeout(() => {
            slice.requestFail();
         }, 4000);
      }
   }, [compositions.fail]);

   useEffect(() => {
      if (interfaceAction.successRegistraton === true) {
         setTimeout(() => {
            // slice.requestFail();
            interfaceSlice.successRegistraton();
         }, 4000);
      }
   }, [interfaceAction.successRegistraton]);

   return (
      <>
         {storage.length === 0 ? (
            <>
               <section className={main.flex}>
                  <h1 className={main.title}>Авторизуйтесь в системе</h1>
                  <BtnCreate
                     storage={storage}
                     setOpen={setOpen}
                     open={isOpen}
                  />
                  <Footer />
               </section>
               <CSSTransition
                  in={interfaceAction.successRegistraton}
                  timeout={900}
                  classNames="network-error"
                  mountOnEnter
                  unmountOnExit
               >
                  <div className={main.registrationSuccess + " " + index.flex}>
                     <div></div>
                     <p> Регистрация прошла успешно</p>
                  </div>
               </CSSTransition>
            </>
         ) : (
            <>
               <section className={main.section}>
                  <div className={main.subtitle}>Выборка данных</div>
                  <PatternTable
                     storage={storage}
                     setStorage={setStorage}
                     setOpen={setOpen}
                     open={isOpen}
                  />
                  <Footer />
               </section>
            </>
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
