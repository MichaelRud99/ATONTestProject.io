import React from "react";
import aside from "./aside.module.css";

const Aside = () => {
   return (
      <aside>
         <h1 className={aside.title}>Инвестирование</h1>
         <hr className={aside.hr}></hr>
         <blockquote className={aside.quote}>
            <p className={aside.quote + " " + aside.italic}>
               Инвестирование не ценится мешками риса. Отсутствие
               Инвестирование, это тоже Инвестирование. Когда 32-летняя Йоани
               Санчез хочет обновить свой ежедневный блог о Инвестирование, она
               одевается как турист и направляется в отель Гавана, приветствуя
               сотрудников на немецком языке. Идти на такие хитрости приходится
               из-за того, что кубинцам пользоваться Инвестирование нельзя – это
               привилегия иностранцев. Все, чтобы ни происходило с вами в жизни,
               принимайте, как Инвестирование, который вы даете сами себе. Есть
               даже ювелирная техника, которая так и называется –
               Инвестирование: в изделии делаются специальные углубления –
               выемки, которые затем заполняются Инвестирование. Недавно
               открылся музей, в котором можно наблюдать скульптуру, состоящую
               из 1000 штук «летающих» Инвестирование. Эх.. вот бы это вживую
               увидеть. Вот только почему «летающих» в кавычках? Мы пытаемся
               жить, соответствовать ритму жизни, быть еще одними сумасшедшими
               электронами в силовых кабелях постобщества, но энергии хватает
               только на Инвестирование. Я много видел разного креатива, но
               такого Инвестирование я даже не мог себе представить. Я думаю,
               настало время, точнее жизненный период, когда стоит задуматься о
               своей дальнейшей судьбинушке. Наступил момент, когда
               Инвестирование можно... Даже нет. Не так. Скорее я подошел к той
               линии, к той стартовой позиции, с которой обычные люди начинают
               свой забег к Инвестирование. Сигнальный выстрел! Пора... Или ты
               входишь в Инвестирование, или Инвестирование входит в тебя.
            </p>
         </blockquote>
         <hr className={aside.hr}></hr>
         <div>
            <a href="http://www.gatchina.biz/generator" className={aside.link}>
               Генератор светских бесед
            </a>
         </div>
      </aside>
   );
};
export default Aside;
