import {Icon} from "./Icon.js";
import {Header} from "./Header.js";
import {GameCard} from "./GameCard.js";
import {_} from "./utils.js";

import "https://unpkg.com/boxicons@2.1.4/dist/boxicons.js";

import game_attribs from "../data/game-attribs.json.js";

export const Main = (elem) => {

  elem.innerHTML = `
    <header role="banner"></header>
    <footer role="contentinfo">
      <p>[footer...TODO - add copyright, social links, etc...]</p>  
    </footer>
  `;

  elem.querySelectorAll('header').forEach(Header);

  const main = document.createElement('main');
  main.role = 'main';

  const header = elem.querySelector('header');
  header.after(main);

  const cards_section = _.createElementWithClasses('section', 'game-cards');
  main.appendChild(cards_section);

  game_attribs.forEach(attribs => {
    const card = _.createElementWithClasses('article', 'card-container');
    const element = cards_section.appendChild(card);
    GameCard(element, attribs);
  });

  elem.querySelectorAll('.icon').forEach(Icon);

};
