const images = [];
for (let index = 0; index < 3; index++) {
  images[index] = `${index}.jpg`;
}

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
