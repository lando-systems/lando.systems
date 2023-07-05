export const Header = (elem) => {

  elem.innerHTML = `
    <div class="controls">
      <h1 class="site-title">
        <span class="icon" data-id="sun-24"></span>
        <span class="icon" data-id="moon-24"></span>
        <span class="title">Lando Systems</span>
      </h1>
    </div>
    
    <nav role="navigation">
      <ul>
        <li><a href="#about">about</a></li>
        <li><a href="#games">games</a></li>
        <li><a href="#posts">posts</a></li>
      </ul>
    </nav>
  `;

};
