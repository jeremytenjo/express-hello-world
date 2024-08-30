const express = require('express');
const request = require('request');

const app = express();
const port = process.env.PORT || 3001;

app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/fortnite', (req, res) => {
  request(
    { url: 'https://www.fortnite.com/@bhe/8064-7152-2934?lang=en-US' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res
          .status(500)
          .json({ type: 'error', message: JSON.stringify(error) });
      }

      res.json(JSON.parse(body));
    }
  );
});

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
