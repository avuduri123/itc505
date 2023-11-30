// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  const { pluralNoun, adjective, verb, noun, adverb } = req.body;
  // Ensure that the form fields are correctly received
  console.log('Form Data:', req.body);

  // Create an adventurous story using the input from the form
  const madLib = `In a world of ${pluralNoun}, where everything was ${adjective}, they spent their days ${verb} ${adverb}, creating a life that was truly ${noun}.`;

  // Send the generated adventure story as the response
  res.send(madLib);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
