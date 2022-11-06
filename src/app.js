let currentTime = new Date();

let date = document.querySelector("#date-current");

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let day = days[currentTime.getDay()];

let hour = currentTime.getHours();
let minutes = currentTime.getMinutes();

date.innerHTML = `${day} ${hour}:${minutes}`;

function displayWeatherCondition(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "34d8821390d535d13d1044d3142143f9";
  let city = document.querySelector("#search-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
