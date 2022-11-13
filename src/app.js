let currentTime = new Date();

let date = document.querySelector("#date-current");

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let day = days[currentTime.getDay()];

let hour = currentTime.getHours();
let minutes = currentTime.getMinutes();

date.innerHTML = `${day} ${hour}:${minutes}`;

function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "c0017b263128423e83fd8e6bcb99607b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
