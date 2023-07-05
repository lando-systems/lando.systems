import {Icon} from "./Icon.js";
import {Header} from "./Header.js";
import {GameCard} from "./GameCard.js";

import game_attribs from "../data/game-attribs.json.js";

export const Main = (elem) => {

  elem.innerHTML = `
    <header role="banner"></header>
    <main role="main"></main>
    <footer role="contentinfo">
      <p>[footer...TODO - add copyright, social links, etc...]</p>  
    </footer>
  `;

  elem.querySelectorAll('header').forEach(Header);

  const main = elem.querySelector('main');
  game_attribs.forEach(attribs => {
    const card = document.createElement('article')
    const element = main.appendChild(card);
    GameCard(element, attribs);
  });

  elem.querySelectorAll('.icon').forEach(Icon);

};
