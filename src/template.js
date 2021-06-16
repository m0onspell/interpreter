const template = (html, preloadedState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Interpreter</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/client.js"></script>
      </body>
    </html>
    `;
};

export { template };
