import {Header} from "./Header.js";
import {micromark} from 'https://esm.sh/micromark@4.0.0?bundle';
import {frontmatter, frontmatterHtml} from 'https://esm.sh/micromark-extension-frontmatter@2.0.0?bundle';

// import {micromark} from 'https://cdn.jsdelivr.net/npm/micromark@4.0.0/+esm';
// import {micromarkExtensionFrontmatter} from 'https://cdn.jsdelivr.net/npm/micromark-extension-frontmatter@2.0.0/+esm';

export const Post = async (elem, src) => {

  // fetch markdown content from file specified in 'src'
  const res = await fetch(src);
  if (!res.ok) {
    const error = `Failed to load Post from '${src}', fetch response: ${res}`;
    elem.innerHTML = `<p>${error}</p>`;
    console.error(error);
    return;
  }
  const md = await res.text();

  elem.innerHTML = `
    <header role="banner"></header>
    <main role="main">
      <div class="post-container"></div>
    </main>
    <footer role="contentinfo">
      <p>[footer...TODO - add copyright, social links, etc...]</p>  
    </footer>
  `;

  elem.querySelectorAll('header').forEach(Header);

  // TODO - create an index page for posts, then for each post (*.md) in /posts, create a PostCard and link to them

  let post = elem.querySelector('.post-container');
  post.innerHTML = micromark(md, {
    extensions: [frontmatter()],
    htmlExtensions: [frontmatterHtml()]
  });

};
