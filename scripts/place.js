// Static weather data
const temperature = 40; // °F
const condition = "Sunny"; // Example weather condition
const windSpeed = 10; // mph

// Select elements in the DOM
const temperatureElement = document.getElementById("temperature");
const conditionElement = document.getElementById("condition");
const windChillElement = document.querySelector(".windchill");

// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    return (
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(2);
}

// Update the DOM with temperature and condition
temperatureElement.textContent = temperature;
conditionElement.textContent = condition;

// Check conditions for wind chill and update it
if (temperature <= 50 && windSpeed > 3) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `Wind Chill: ${windChill} °F`;
} else {
    windChillElement.textContent = "Wind Chill: N/A";
}
