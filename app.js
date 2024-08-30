const express = require('express');
const request = require('request');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3001;

const apiProxy = createProxyMiddleware({
  target: 'https://www.fortnite.com',
});

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api', apiProxy);

app.get('/api/fortnite', async (req, res) => {
  const pppp = await fetch(
    'https://www.fortnite.com/@bhe/8064-7152-2934?lang=en-US'
  ).then((res) => res.text());

  console.log(pppp);

  res.send(pppp);
});

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
