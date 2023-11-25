document.addEventListener("DOMContentLoaded", function () {
    var xhr = new XMLHttpRequest();
    var apiKey = "5d066958a60d315387d9492393935c19";
    var city = "LVIV";
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + apiKey;

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var weatherData = JSON.parse(xhr.responseText);
            displayWeather(weatherData);
        }
    };

    xhr.open("GET", apiUrl, true);
    xhr.send();

    function displayWeather(data) {
        document.getElementById("city").innerText = data.name;
        document.getElementById("temperature").innerText = data.main.temp;
        document.getElementById("pressure").innerText = data.main.pressure;
        document.getElementById("description").innerText = data.weather[0].description;
        document.getElementById("humidity").innerText = data.main.humidity;
        document.getElementById("windSpeed").innerText = data.wind.speed;
        document.getElementById("windDirection").innerText = data.wind.deg;

        var iconCode = data.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        document.getElementById("weatherIcon").src = iconUrl;
    }
});