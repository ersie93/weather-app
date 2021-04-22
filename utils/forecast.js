const request = require('request');

const forecast = (latLong, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=${latLong}`;

	request({ url: url, json: true }, (error, response) =>{
		// console.log(response.body.current);
		if(error){
			callback('Unable to connect to weather app!');
		} else if(response.body.error){
			callback('Unable to find location!');
		} else { 
			callback(undefined,`${response.body.current.weather_descriptions}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees.`);
		}
	})
}

module.exports = forecast;