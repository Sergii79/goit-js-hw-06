
const box = {
    inputEl: document.getElementById('font-size-control'),
    spanEl: document.getElementById('text'),
}

function spanChange(event) {
    return (box.spanEl.style.fontSize = event.currentTarget.value + "px");
}

box.inputEl.addEventListener(`input`, spanChange);







