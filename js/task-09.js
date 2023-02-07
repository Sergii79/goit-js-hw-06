function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
console.log(body);

const color = getRandomHexColor();

const buttonChange = document.querySelector('.change-color');
buttonChange.addEventListener('click, buttonChangeColor');