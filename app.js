require('dotenv').config();
const request = require('request');


const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=Milton Keynes`;

request({ url: url, json: true }, (error, response) =>{
	const temp = response.body.current.temperature;
	const feelsLike = response.body.current.feelslike;
	const description = response.body.current.weather_descriptions;
	console.log(`${description}. It is currently ${temp} degrees out. It feels like ${feelsLike} degrees.`);
})