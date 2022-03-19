const images = [];
for (let index = 0; index < 3; index++) {
  images[index] = `${index}.jpg`;
}

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `${chosenImage}`;
console.log("file: background.js ~ line 11 ~ bgImage.src", bgImage.src);

document.body.appendChild(bgImage);
