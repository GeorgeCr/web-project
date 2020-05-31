const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Flickr = require('flickr-sdk');
const PORT = '8080';
const buildUrls = require('./utils/buildUrls');
const Twit = require('twit');

const config = require('./utils/config');

const TwitInstance = new Twit(config);

const app = express();
const flickr = new Flickr('629095d9037cc5330cb2a4314442d6ea');

app.use(cors());
app.use(bodyParser.json());

app.get('/images/', (req, res) => {
    let photos = [];
    const { searchTerm } = req.query;
    flickr.photos.search({
        text: searchTerm,
        per_page: 10
    })
    .then(data => {
        photos = data.body.photos.photo;
        res.json(buildUrls(photos));
    })
    .catch(error => console.log('Some error happened. ', error));
});

app.get('/tweets/', (req, res) => {
    const { searchTerm } = req.query;
    const params = {
        q: searchTerm,
        count: 2
    }
    TwitInstance.get('search/tweets', params, (err, data, response) => {
        res.json({
            data
        });
    });
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}.`));