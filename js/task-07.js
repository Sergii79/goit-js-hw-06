
const box = {
    inputEl: document.getElementById('font-size-control'),
    spanEl: document.getElementById('text'),
}

box.spanEl.style.fontSize = `${box.inputEl.value}px`;

function spanChange(event) {
    return (box.spanEl.style.fontSize = event.currentTarget.value + "px");
}

box.inputEl.addEventListener(`input`, spanChange);




// const range = document.querySelector("input");
// const span = document.querySelector('span');

// range.addEventListener('input', (e) => {
//     span.style.fontSize = ${e.currentTarget.value}px;
//     console.log(e.currentTarget.value);
// })


