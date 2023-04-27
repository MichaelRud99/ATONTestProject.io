/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/";
import { CSSTransition } from "react-transition-group";

import { useActions } from "../Hooks/useActotion";
import { listCompositionSlice } from "../../utils/redux/slices/listComposition";
import { interfaceActionSlice } from "../../utils/redux/slices/interfaceActionSlice";
import {
   selectLoginFields,
   selectorInterface,
   selectorListComposition,
} from "../../utils/redux/selectors";

import BtnCreate from "../BtnCreate";
import PatternTable from "../Table/PatternTable/PatternTable";
import Footer from "../Footer/Footer";
import RequestAnswerGood from "../RequestAnswers/RequestAnswerGood";

import "../transitionComponents.css";
import main from "./main.module.css";

const Main = () => {
   const compositions = useSelector(selectorListComposition);
   const listCompositionAction = useActions(listCompositionSlice.actions);
   const interfaceSelector = useSelector(selectorInterface);
   const interfaceAction = useActions(interfaceActionSlice.actions);
   const loginFields = useSelector(selectLoginFields);
   const username = loginFields.username;
   const password = loginFields.password;

   const [isOpen, setOpen] = useState(false);
   const [storage, setStorage] = useState("");

   const timeNotification = 4000;

   useEffect(() => {
      if (sessionStorage.getItem("User") !== null) {
         listCompositionAction.readData();
      }
      setStorage(compositions.data);
   }, []);

   useEffect(() => {
      setStorage(compositions.data);
   }, [compositions.data.length, compositions.data.page]);

   useEffect(() => {
      if (compositions.fail === true) {
         setTimeout(() => {
            listCompositionAction.requestFail();
         }, timeNotification);
      }
   }, [compositions.fail]);

   useEffect(() => {
      if (interfaceSelector.successRegistraton === true) {
         setTimeout(() => {
            interfaceAction.successRegistraton();
         }, timeNotification);
      }
      if (
         interfaceSelector.successLogin === true &&
         sessionStorage.getItem("User") === null
      ) {
         sessionStorage.setItem(
            "User",
            JSON.stringify({
               username: username,
               password: password,
            })
         );
         setTimeout(() => {
            interfaceAction.successLogin();
         }, timeNotification);
      }
   }, [interfaceSelector.successRegistraton, interfaceSelector.successLogin]);

   useEffect(() => {
      if (interfaceSelector.successDelete === true) {
         setTimeout(() => {
            interfaceAction.successDelete();
         }, timeNotification);
      }
   }, [interfaceSelector.successDelete]);

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
               <RequestAnswerGood
                  action={interfaceSelector.successRegistraton}
                  message={"Регистрация прошла успешно"}
               />
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

         <RequestAnswerGood
            action={interfaceSelector.successDelete}
            message={"Данные удалены"}
         />

         <RequestAnswerGood
            action={interfaceSelector.successLogin}
            message={"Вход выполнен"}
         />

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
