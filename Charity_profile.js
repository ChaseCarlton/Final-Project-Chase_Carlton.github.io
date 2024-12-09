
const signUpButton = document.getElementById('sign-up-button');
const signUpSection = document.getElementById('sign-up-section');


signUpButton.addEventListener('click', () => {

    if (!document.getElementById('volunteer-form')) {

        const form = document.createElement('form');
        form.id = 'volunteer-form';


        form.innerHTML = `
            <h2>Volunteer Information</h2>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <br>
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone">
            <br>
            <button type="submit">Submit</button>
        `;


        signUpSection.appendChild(form);


        form.addEventListener('submit', (event) => {
            event.preventDefault();


            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;


            alert(`Thank you for signing up, ${name}! We will contact you at ${email}.`);


            form.reset();
        });
    }
});


///hover message
const charityName = document.getElementById('charity-name');
const hoverMessage = document.getElementById('hover-message');


charityName.addEventListener('mouseover', function() {
    hoverMessage.style.display = 'inline';
});


charityName.addEventListener('mouseout', function() {
    hoverMessage.style.display = 'none'; 
});



// Define the API endpoint for weather data in South Carolina
const apiUrl = "https://api.weather.gov/gridpoints/CAE/63,53/forhttps://www.weather.gov/documentation/services-web-apiecast"; // Replace 'CAE/63,53' with your desired location grid point if necessary

// Fetch the weather data
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Extract temperature and weather information
        const forecast = data.properties.periods[0]; // Get the first forecast period (current conditions)
        const temperature = forecast.temperature;
        const temperatureUnit = forecast.temperatureUnit;
        const detailedForecast = forecast.detailedForecast;
        console.log(data)

        // Update the HTML with the weather info
        const weatherLink = document.getElementById("weather-link");
        weatherLink.innerHTML = `${temperature}°${temperatureUnit} - ${detailedForecast}`;
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
        const weatherLink = document.getElementById("weather-link");
        weatherLink.innerHTML = "Unavailable (Error fetching data)";});