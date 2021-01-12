const request = require('request')

const omdb = (data, callback) => {
    const url = `http://omdbapi.com/?t=${data}&&apikey=3f0d33b1`;
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to omdb services!', undefined)
        } else {
            callback(undefined, response)
        }
    })
}

module.exports = ({
    omdb
})