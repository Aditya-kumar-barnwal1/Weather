const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=Mumbai&days=3';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '40af92b73fmshf7b5962381cc7d0p1feb06jsnc86d18423514',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

async function weather() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    }
    catch (error) {
	    console.error(error);
    }
    
}
// weather();
