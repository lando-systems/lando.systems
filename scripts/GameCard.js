import {_} from './utils.js';

/*
TODO
- make entire card (except footer? clickable to play the game
  - for code or a blog post about the game, handle clicks separately in card footer
- (up a level) add sorting options to re-arrange games list
  - sortable by: name, date, ratings (?)
*/

const Rating = (elem, category, value) => {

  // https://emojipedia.org/
  // https://www.unicode.org/emoji/charts/emoji-list.html
  const emoji = {
    'overall': '&#x1f3c6;',   // trophy
    'fun': '&#x1f929;',       // star struck - alt: &#x1f643;(upside down smile), &#x1f973; (partying face)
    'innovation': '&#x2728;', // sparkles
    'theme': '&#x1f4ee;',     // postbox - alt: &#x1f5dd; (old key), &#x1f5f3; (ballot box w/ballot)
    'graphics': '&#x1f3a8;',  // palette - alt: &#x1f58c; (paintbrush), &#x1f58d; (crayon)
    'audio': '&#x1f3a7;',     // headphones - alt: &#x1f3b6; (notes), &#x1f3bc; (musical score), &#x1f50a (speaker loud)
    'humor': '&#x1f923;',     // rofl face
    'mood': '&#x1f525;'       // heart on fire - alt: &#x1f497; (growing heart)
  };

  elem.innerHTML = `
    <td class="rating-category">
       <span class="category-icon">${emoji[category]}</span>
       <span class="category-name"></span>
    </td>
    <td class="rating-value"></td>
  `;

  let category_name = elem.querySelector('.category-name');
  let category_value = elem.querySelector('.rating-value');

  category_name.innerText = category;
  category_value.innerText = (value !== 0) ? value : '-';

};

export const GameCard = (elem, attribs) => {

  elem.innerHTML = `
    <div class="card">
      <img class="card-image" src="" alt="">

      <div class="card-content">
        <section class="card-header">
          <a href="#" target="_blank">
            <h3 class="card-title"></h3>
            <h4 class="card-subtitle">&nbsp;</h4>
          </a>
          <h6 class="created-date"></h6>
        </section>
        
        <section class="card-body">
          <table>
            <thead>
              <th>Category</th>
              <th>Rating</th>
            </thead>
            <tbody class="game-ratings"></tbody>
          </table>
        </section>
      </div>

      <section class="card-footer">
        <a class="button game-code" href="#" target="_blank">code</a>
        <a class="button game-play" href="#" target="_blank">play</a>
        <a class="button game-entry" href="#" target="_blank">entry</a>
      </section>
    </div>
  `;

  if (attribs) {
    let img = elem.querySelector('.card-image');
    let title = elem.querySelector('.card-title');
    let subtitle = elem.querySelector('.card-subtitle');
    let created_date = elem.querySelector('.created-date');
    let game_ratings = elem.querySelector('.card-body .game-ratings');
    let game_code = elem.querySelector('.card-footer a.game-code');
    let game_play = elem.querySelector('.card-footer a.game-play');
    let game_entry = elem.querySelector('.game-entry');

    // convert date string to Date type for formatting purposes
    attribs.date = new Date(attribs.date);
    const currLocale = undefined;
    const dateOptions = {month: 'short', day: 'numeric', year: 'numeric'};
    const createdDate = attribs.date.toLocaleDateString(currLocale, dateOptions);

    img.src = `../images${attribs.thumb}`;
    img.alt = attribs.title;

    title.innerText = attribs.title;
    if (attribs.subtitle) {
      subtitle.innerText = attribs.subtitle;
    }
    created_date.innerText = createdDate;

    game_code.href = attribs.code;
    game_play.href = attribs.play;
    game_entry.href = attribs.entry;

    for (const [category, value] of Object.entries(attribs.ratings)) {
      const rating = _.createElementWithClasses('tr', 'game-rating');
      game_ratings.appendChild(rating);
      Rating(rating, category, value);
    }

    const toggle_anim = (event) => {
      let classes = event.target.classList;
      classes.toggle('animate__animated');
      classes.toggle('animate__pulse');

      let rating_icons = event.target.querySelectorAll('.category-icon');
      rating_icons.forEach(icon => {
        let is_visible = (icon.style.visibility === 'visible');
        icon.style.visibility = is_visible ? 'hidden' : 'visible';
      });
    };

    elem.addEventListener('mouseenter', toggle_anim);
    elem.addEventListener('mouseleave', toggle_anim);

    let buttons = elem.querySelectorAll('.button');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', toggle_anim);
      button.addEventListener('mouseleave', toggle_anim);
    });
  }

};
