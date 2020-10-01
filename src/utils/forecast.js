const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a21068f1d72c9dd2a582f38fe1290d0b&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error) {
            console.log(body.error.info)
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + 'º C. It feels like ' + body.current.feelslike + 'º C. Humidity is ' + body.current.humidity + "%.")
        }
    })
}

module.exports = forecast
