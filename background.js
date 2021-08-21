const images = ["apple.jpg", "BIT.jpg"];

const choseImage = images[Math.floor(Math.random() * images.length)];

const backimage = document.createElement("img");

backimage.src = `${choseImage}`;

document.body.appendChild(backimage);
