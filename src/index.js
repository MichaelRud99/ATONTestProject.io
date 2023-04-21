import React from "react";
import ReactDOM from "react-dom/client";
import index from "./Components/index.module.css";
import "./Components/CssVariable.css";
import Main from "./Components/Main";
import Aside from "./Components/Aside/Aside";
import { Provider } from "react-redux";
import store from "./utils/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <React.StrictMode>
      <section className={index.flex + " " + index.body}>
         <Aside />
         <Provider store={store}>
            <Main />
         </Provider>
      </section>
   </React.StrictMode>
);
