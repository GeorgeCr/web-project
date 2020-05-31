module.exports = data => {
    return data.map(item => `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`);
}