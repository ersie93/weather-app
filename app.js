require('dotenv').config();
const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Milton Keynes', (error, data) => {
	const latLong = `${data.latitude},${data.longitude}`
	forecast(latLong, (error, data) => {
		console.log(error);
		console.log(data);
	})
})
