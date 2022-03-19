const clock = document.querySelector("h2#clock");

function getClock() {
  const getHours = String(new Date().getHours()).padStart(2, "0");
  const getMinutes = String(new Date().getMinutes()).padStart(2, "0");
  const getSeconds = String(new Date().getSeconds()).padStart(2, "0");

  clock.innerHTML = `${getHours} : 
  ${getMinutes} : 
  ${getSeconds}`;
}

setInterval(getClock, 1000);
