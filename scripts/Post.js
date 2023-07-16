import {Header} from "./Header.js";

export const Post = (elem, src) => {

  elem.innerHTML = `
    <header role="banner"></header>
    <main role="main">
      <div class="post-container">
        <zero-md class="post" src="${src}">
          <template>
            <link rel="stylesheet" href="../styles/markdown.css" />
          </template>
        </zero-md>
      </div>
    </main>
    <footer role="contentinfo">
      <p>[footer...TODO - add copyright, social links, etc...]</p>  
    </footer>
  `;

  elem.querySelectorAll('header').forEach(Header);

  // TODO - create an index page for posts, then for each post (*.md) in /posts, create a PostCard and link to them

};
