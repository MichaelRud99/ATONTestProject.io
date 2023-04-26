import footer from "./footer.module.css";
import index from "../index.module.css";
const Footer = () => {
   return (
      <section className={footer.section}>
         <h4 className={footer.title}>Created by Michael Rudenok</h4>
         <div className={index.flex+" "+ footer.linkContainer}>
            <a
               className={footer.link + " " + index.transitionColor}
               href="https://github.com/MichaelRud99"
            >
               GitHub
            </a>
            <a
               className={footer.link + " " + index.transitionColor}
               href="https://t.me/monsegard"
            >
               Telegram
            </a>
         </div>
      </section>
   );
};

export default Footer;
