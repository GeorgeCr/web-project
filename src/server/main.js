// importarea pachetelor necesare si instantierea unei aplicatii express si a unei instante Twitter
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

app.use(cors()); // Folosirea CORS
app.use(bodyParser.json()); // Accesul la req.body

app.get('/images/', (req, res) => {
    let photos = [];
    const { searchTerm } = req.query;
    flickr.photos.search({ // apelarea metodei de search conform Flickr API
        text: searchTerm,
        per_page: 9
    })
    .then(data => {
        photos = data.body.photos.photo;
        res.json(buildUrls(photos)); // construirea url-urilor dupa preluarea datelor
    })
    .catch(error => console.log('Some error happened. ', error));
});

app.get('/tweets/', (req, res) => {
    const { searchTerm, resultsCount } = req.query;
    const params = {
        q: searchTerm,
        count: resultsCount
    }
    // preluarea tweets dupa parametrii de cautare de mai sus
    TwitInstance.get('search/tweets', params, (err, data, response) => {
        try {
            res.json({
                data
            });
        }
        catch {
            res.json({
                errorMessage: err
            });
        }
        
    });
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}.`));