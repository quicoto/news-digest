const fs = require('fs');
let Parser = require('rss-parser');
const templates = require('./templates.js');
let parser = new Parser();
const promises = [];
const sources = JSON.parse(fs.readFileSync('sources.json'));

// Create the requried folders
fs.mkdir(`./dist`, () => {});

function createFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (!err) {
      console.log('File created: ' + fileName);
    }
  });
}

function itemTemplate(item) {
  return `<li class="mb-1">
    <a rel="noopener" target="_blank" href="${item.link}" title="${item.title}">${item.title}</a>
    <time datetime="${item.pubDate}" class="ps-2 small">${item.pubDate}</time>
  </li>`
}

sources.sections.forEach((section) => {
  section.items.forEach((item) => {
    promises.push(parser.parseURL(item.url))
  });
});

Promise.all(promises).then((feeds) => {
  let output = ``;

  feeds.forEach((feed) => {
    output += `<section class="row">`;
      output += `<div class="col">`;
        output += `<h2 class="h3">${feed.title}</h2>`;
        output += '<ul class="mb-4">';
        output += feed.items.slice(0, 10).map(itemTemplate).join('');
        output += '</ul>';
      output += `</div>`;
    output += `</section>`;
  });

  output = templates.document(output);

  createFile('./dist/index.html', output)
});