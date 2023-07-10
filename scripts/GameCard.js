import {_} from './utils.js';

// other good icons:
// joystick, speaker, volume-full, microphone, ruler, film,
// bomb, brain, meteor, cookie, donate-heart, bookmark-heart,
const rating_category_icons = {
  'overall': 'trophy',
  'fun': 'happy-beaming',
  'innovation': 'health',
  'theme': 'key',
  'graphics': 'image',
  'audio': 'music',
  'humor': 'like',
  'mood': 'spa'
};

const Rating = (elem, category, value) => {

  elem.innerHTML = `
    <td class="rating-icon">
      <box-icon name="${rating_category_icons[category]}"
                type="regular"
                color="white"
                size="sm"
      />
    </td>
    <td class="rating-category"></td>
    <td class="rating-value"></td>
  `;

  let elem_category = elem.querySelector('.rating-category');
  let elem_value = elem.querySelector('.rating-value');

  elem_category.innerText = category;
  elem_value.innerText = value;

};

export const GameCard = (elem, attribs) => {

  elem.innerHTML = `
    <div class="card">
      <img class="card-image"
           src="../images/logo-512.png"
           alt="Game card"
      >

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
              <th colspan="2">Category</th>
              <th>Rating</th>
            </thead>
            <tbody class="game-ratings"></tbody>
            <tfoot>
              <tr>
               <td colspan="3">
                 <a class="game-entry" href="#" target="_blank">Jam Entry</a>
               </td>
              </tr>
            </tfoot>
          </table>
        </section>
      </div>

      <section class="card-footer">
        <a class="button game-code" href="https://github.com" target="_blank">code</a>
        <a class="button game-play" href="posts/" target="_blank">play</a>
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
