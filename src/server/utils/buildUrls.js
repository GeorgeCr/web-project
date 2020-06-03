module.exports = data => { // construirea unui url pentru accesarea unei poze de pe flickr, conform documentatiei
    return data.map(item => `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`);
}