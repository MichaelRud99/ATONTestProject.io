import loader from "./loader.module.css";
import index from "../index.module.css";

const Loader = () => {
   return (
      <div className={index.flex}>
         <span className={loader.loader}></span>
      </div>
   );
};
export default Loader;
