import * as base from 'templates/base.js';

const forEach = (arr, fn) => {
  let i, str = '';
  for (i = 0; i < arr.length; i++) str += fn(arr[i]);
  return str;
};

export const template = ({ title, blog }) => base.template({
  title,
  contents: `
    <h1>
        <a href="/">kevin f.</a>
    </h1>
    <div class="line"></div>
    ${forEach(blog, entry => `
        <article class="archive-link">
            <time datetime="${entry.date}">${entry.date.replaceAll('-', '.')}</time>
            -
            <header style="display: inline;"><a href="/blog/${entry.slug}">${entry.title}</a></header>
        </article>
    `)}
  `
});