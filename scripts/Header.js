export const Header = (elem) => {

  elem.innerHTML = `
    <h1 class="title">
      <a href="#">Lando Systems</a>
    </h1>
    
    <nav role="navigation">
      <ul>
        <li><a href="#about">about</a></li>
        <li><a href="#games">games</a></li>
        <li><a href="#posts">posts</a></li>
      </ul>
    </nav>
    
    <div class="controls">
      <span class="icon" data-id="sun-24"></span>
      <span class="icon" data-id="moon-24"></span>
    </div>
  `;

};
