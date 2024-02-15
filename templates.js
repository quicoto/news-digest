module.exports.document = function (body) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A single place to check all my daily news sites in 1 go">
    <title>Daily Digest</title>
    <link type="text/css" rel="stylesheet" href="./styles.css?ver=1.0.1" media="all">
  </head>
  <body>
    <main>
      <header class="bg-dark mb-4">
        <nav class="container navbar navbar-dark">
        <div class="container-fluid">
          <h1 class="text-light h2 mb-0">Daily Digest</h1>
          <a rel="noopener" href="https://github.com/quicoto/news-digest" class="text-light" title="See repository on Github">Github</a>
        </div>
        </nav>
      </header>
      <div class="container mb-3">
        <div class="row mb-3">
          <div class="col">
            <strong>Updated</strong>: ${new Date()}
          </div>
        </div>
        ${body}
      </div>
      <footer class="bg-dark text-light p-4">
        <div class="container text-center">
          Made with <span class="pe-1">❤️</span> by <a class="text-light" href="https://ricard.blog/" title="Ricard Torres Blog">Ricard Torres</a>
        </div>
      </footer>
    </main>
  </body>
  </html>`;
}