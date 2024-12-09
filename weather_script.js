
const apiUrl = "https://api.weather.gov/gridpoints/CAE/65,52/forecast" 
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
      
        const forecast = data.properties.periods[0];
        const temperature = forecast.temperature;
        const temperatureUnit = forecast.temperatureUnit;

   
        document.getElementById("temperature").textContent = `${temperature}°${temperatureUnit}`;
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
        document.getElementById("temperature").textContent = "Unavailable (Error fetching data)";
    });
