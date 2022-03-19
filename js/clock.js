const clock = document.querySelector("h2#clock");

function getClock() {
  const getHours = String(new Date().getHours()).padStart(2, "0");
  const getMinutes = String(new Date().getMinutes()).padStart(2, "0");
  const getSeconds = String(new Date().getSeconds()).padStart(2, "0");

  clock.innerHTML = `${getHours} 시 
  ${getMinutes} 분 
  ${getSeconds}초`;
}

setInterval(getClock, 1000);
