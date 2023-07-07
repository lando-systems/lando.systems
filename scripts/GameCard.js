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
            <h3 class="card-title">Game Title</h3>
          </a>
          <h4 class="card-subtitle">subtitle</h4>
        </section>
        
        <section class="card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
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
    let body = elem.querySelector('.card-body p');
    let game_code = elem.querySelector('.card-footer a.game-code');
    let game_play = elem.querySelector('.card-footer a.game-play');

    img.src = `../images${attribs.thumb}`;
    img.alt = attribs.title;
    title.innerText = attribs.title;
    subtitle.innerText = attribs.date;
    // body.innerText = attribs.desc;
    game_code.href = attribs.code;
    game_play.href = attribs.play;

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
