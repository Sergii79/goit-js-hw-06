function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const input = document.querySelector('input[type="number"]');

const buttonCreate = document.querySelector('button[data-create]');

const buttonDestroy = document.querySelector('button[data-destroy]');

const boxes = document.getElementById('boxes');


function createBoxes(amount) {
    const createElements = []
    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div')
        div.style.height = `${25 + 5 * i}px`
        div.style.width = `${50 + 10 * i}px`
        div.style.background = getRandomHexColor()
        createElements.push(div)
    }
    return createElements
}


const destroyBoxes = () => {
    boxes.innerHTML = ''
}

 buttonCreate.addEventListener('click', () => {
    const boxesToAdd = createBoxes(input.value)
    boxes.append(...boxesToAdd)
 })

 buttonDestroy.addEventListener('click', () => {
    destroyBoxes.call()
})

