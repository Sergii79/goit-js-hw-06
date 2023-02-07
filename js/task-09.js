function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');

const button = document.querySelector('.change-color');

const span = document.querySelector('.color');

function buttonChange() {

  //* 1-й варіант тіла функції:
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();

  //* 2-й варіант тіла функції:
  // const color = getRandomHexColor();
  // span.textContent = color;
  // body.style.backgroundColor = color;  
}

button.addEventListener('click', buttonChange);