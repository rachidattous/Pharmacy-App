const NodeGeocoder = require('node-geocoder')

const options = {
  provider: 'mapquest',
  httpAdapter: 'https',
  apiKey: '9Ro5jSPhGcGWjVzkxOjL8gBqw3Md8j5C', 
  formatter: null 
}

const geocoder = NodeGeocoder(options);

module.exports = geocoder