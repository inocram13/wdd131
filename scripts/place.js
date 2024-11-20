const temperature = 40;
const condition = "Sunny";
const windSpeed = 10;

const temperatureElement = document.getElementById("temperature");
const conditionElement = document.getElementById("condition");
const windChillElement = document.querySelector(".windchill");


function calculateWindChill(temp, windSpeed) {
    return (
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(2);
}

temperatureElement.textContent = temperature;
conditionElement.textContent = condition;

if (temperature <= 50 && windSpeed > 3) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `Wind Chill: ${windChill} °F`;
} else {
    windChillElement.textContent = "Wind Chill: N/A";
}
