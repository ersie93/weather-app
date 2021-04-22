require('dotenv').config();
const request = require('request');


const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=Milton Keynes`;
const mapbox = `https://api.mapbox.com/geocoding/v5/mapbox.places/Milton%20Keynes.json?access_token=${process.env.MAPBOX_KEY}&limit=1`

request({ url: url, json: true }, (error, response) =>{
	if(error){
		console.log('Unable to connect to weather app!');
	} else if(response.body.error){
		console.log('Unable to find location!');
	} else {
		console.log(`${response.body.current.weather_descriptions}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees.`);
	}
})

request({ url: mapbox, json: true }, (error, response) =>{
	if(error){
		console.log('Unable to connect to mapbox!');
	} else if(!response.body.features[0]){
		console.log('not a valid location');
	} else {
		const latitude = response.body.features[0].center[1];
		const longitude = response.body.features[0].center[0];
		console.log(latitude, longitude);
	}
})