/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/";

import { useActions } from "../Hooks/useActotion";
import { listDataSlice } from "../../utils/redux/slices/listData";
import { interfaceActionSlice } from "../../utils/redux/slices/interfaceActionSlice";
import {
   selectLoginFields,
   selectorInterface,
   selectorListData,
} from "../../utils/redux/selectors";

import BtnCreate from "../BtnCreate";
import PatternTable from "../Table/PatternTable/PatternTable";
import Footer from "../Footer/Footer";
import RequestAnswerGood from "../RequestAnswers/RequestAnswerGood";

import "../transitionComponents.css";
import main from "./main.module.css";
import Loader from "../Loader/Loader";
import RequestAnswerBad from "../RequestAnswers/RequestAnswerBad";

const Main = () => {
   const listData = useSelector(selectorListData);
   const listDataAction = useActions(listDataSlice.actions);
   const interfaceSelector = useSelector(selectorInterface);
   const interfaceAction = useActions(interfaceActionSlice.actions);
   const loginFields = useSelector(selectLoginFields);
   const username = loginFields.username;
   const password = loginFields.password;

   const [isOpen, setOpen] = useState(false);
   const [storage, setStorage] = useState("");

   const timeNotification = 5000;

   useEffect(() => {
      if (sessionStorage.getItem("User") !== null) {
         listDataAction.readData();
      }
      setStorage(listData.data);
   }, []);

   useEffect(() => {
      setStorage(listData.data);
      interfaceAction.load(false);
   }, [listData.data.length, listData.data.page]);

   useEffect(() => {
      if (interfaceSelector.successRegistraton === true) {
         setTimeout(() => {
            interfaceAction.successRegistraton(false);
         }, timeNotification);
      }
      if (interfaceSelector.successLogin === true && sessionStorage.getItem("User") === null) {
         sessionStorage.setItem(
            "User",
            JSON.stringify({
               username: username,
               password: password,
            })
         );
         setTimeout(() => {
            interfaceAction.successLogin(false);
         }, timeNotification);
      }
   }, [interfaceSelector.successRegistraton, interfaceSelector.successLogin]);

   useEffect(() => {
      if (interfaceSelector.successFail[1] === true) {
         setTimeout(() => {
            interfaceAction.successFail([interfaceSelector.successFail[0], false]);
         }, timeNotification);
      }
   }, [interfaceSelector.successFail[1]]);

   useEffect(() => {
      if (interfaceSelector.successDeleteAll === true) {
         setTimeout(() => {
            interfaceAction.successDeleteAll(false);
         }, timeNotification);
      }
      if (interfaceSelector.successAddUser === true) {
         setTimeout(() => {
            interfaceAction.successAddUser(false);
         }, timeNotification);
      }
      if (interfaceSelector.successEdit === true) {
         setTimeout(() => {
            interfaceAction.successEdit(false);
         }, timeNotification);
      }
      if (interfaceSelector.successDelete === true) {
         setTimeout(() => {
            interfaceAction.successDelete(false);
         }, timeNotification);
      }
   }, [
      interfaceSelector.successDeleteAll,
      interfaceSelector.successAddUser,
      interfaceSelector.successEdit,
      interfaceSelector.successDelete,
   ]);

   return (
      <>
         {storage.length === 0 ? (
            <>
               <section className={main.flex}>
                  {sessionStorage.getItem("User") === null && interfaceSelector.load === false ? (
                     <>
                        <h1 className={main.title}>Авторизуйтесь в системе</h1>
                        <BtnCreate storage={storage} setOpen={setOpen} open={isOpen} />
                     </>
                  ) : (
                     <>
                        <Loader />
                        <p className={main.subtitle}>Загрузка данных</p>
                     </>
                  )}
                  <Footer />
               </section>
               <RequestAnswerGood
                  selector={interfaceSelector.successRegistraton}
                  message={"Регистрация прошла успешно"}
                  action={interfaceAction.successRegistraton}
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
            selector={interfaceSelector.successDeleteAll}
            message={"Данные удалены"}
            action={interfaceAction.successDeleteAll}
         />

         <RequestAnswerGood
            selector={interfaceSelector.successLogin}
            message={"Вход выполнен"}
            action={interfaceAction.successLogin}
         />

         <RequestAnswerGood
            selector={interfaceSelector.successAddUser}
            message={"Пользователь добавлен"}
            action={interfaceAction.successAddUser}
         />

         <RequestAnswerGood
            selector={interfaceSelector.successEdit}
            message={"Пользователь изменён"}
            action={interfaceAction.successEdit}
         />

         <RequestAnswerGood
            selector={interfaceSelector.successDelete}
            message={"Пользователь удалён"}
            action={interfaceAction.successDelete}
         />
         <RequestAnswerBad
            selector={interfaceSelector.successFail}
            message={"Ошибка "}
            action={interfaceAction.successFail}
         />
      </>
   );
};
export default Main;
