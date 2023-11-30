const express = require('express');
const path = require('path');
const server = express();

const port = 3000;

server.use(express.urlencoded({ extended: true }));

server.post('/itc505/lab7/', (req, res) => {
  const { pluralNoun, adjective, verb, noun, adverb } = req.body;

  const madLib = `In a world of ${pluralNoun}, where everything was ${adjective}, they spent their days ${verb} ${adverb}, creating a life that was truly ${noun}.`;

  res.send(madLib);
});

server.use(express.static(path.join(__dirname, 'public')));

server.listen(port, () => console.log(`Server running on http://localhost:${port}`));
