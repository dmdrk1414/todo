const API_KEY = "15f1bcbbaf67df2baa68485eb095fa9f";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // console.log(`You live it latitude : ${lat} , longitude : ${lon}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url) //
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:last-child");
      const weather = document.querySelector("#weather span:first-child");
      // city.innerHTML = `${data.name}`;
      weather.innerHTML = `오늘의 날씨는 ${data.weather[0].main} / ${data.main.temp} 도 `;
    });
}
function onGeoError() {
  alert("날씨못찾겠어");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
