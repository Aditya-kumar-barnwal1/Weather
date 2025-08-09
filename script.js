const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=Tokyo&days=3';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '40af92b73fmshf7b5962381cc7d0p1feb06jsnc86d18423514',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};
let result;

async function weather() {
    try {
        const response = await fetch(url, options);
        result = await response.json();
        console.log(result);
        document.getElementById('place').innerHTML=`${result.location.name},${result.location.country}`;
        document.getElementById('date').innerHTML=`${result.location.localtime}`;
        document.getElementById('current.text').innerHTML=`${result.current.condition.text}`;
        document.getElementById('icon').src=`${result.current.condition.icon}`;
        document.getElementById('current_temp_c').innerHTML=result.current.temp_c;
        document.getElementById('current_temp_f').innerHTML=result.current.temp_f;
        document.getElementById('feels_like').innerHTML=result.current.feelslike_c;
        document.getElementById('humidity').innerHTML=result.current.humidity;
        document.getElementById('chance_of_rain').innerHTML=result.forecast.forecastday[0].day.daily_chance_of_rain;
        document.getElementById('max_temp').innerHTML=result.current.max_temp_c
        document.getElementById('heatindex_c').innerHTML=result.current.heatindex_c
        document.getElementById('uv').innerHTML=result.current.uv
        document.getElementById('gust_kph').innerHTML=result.current.gust_kph
        document.getElementById('sunrise').innerHTML=result.forecast.forecastday[0].astro.sunrise
        document.getElementById('moonrise').innerHTML=result.forecast.forecastday[0].astro.moonrise
        document.getElementById('moonset').innerHTML=result.forecast.forecastday[0].astro.moonset
        document.getElementById('sunset').innerHTML=result.forecast.forecastday[0].astro.sunset
        document.getElementById('moonphase').innerHTML=result.forecast.forecastday[0].astro.moon_phase
        document.getElementById('max_temp').innerHTML=result.forecast.forecastday[0].day.maxtemp_c
        document.getElementById('min_temp').innerHTML=result.forecast.forecastday[0].day.mintemp_c
        document.getElementById('wind_degree').innerHTML=result.current.wind_degree
        document.getElementById('wind_kph').innerHTML=result.current.wind_kph
        document.getElementById('wind_dir').innerHTML=result.current.wind_dir
    }

    catch (error) {
	    console.error(error);
    }
    
}
weather();
