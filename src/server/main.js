const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Flickr = require('flickr-sdk');
const PORT = '8080';

const app = express();
const flickr = new Flickr('629095d9037cc5330cb2a4314442d6ea');

app.use(cors());
app.use(bodyParser.json());

app.get('/images', (req, res) => {
    flickr.photos.search({
        text: 'doggo',
        per_page: 10
    })
    .then(response => res.json(response.body))
    .catch(error => console.log('Some error happened. ', error));
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}.`));