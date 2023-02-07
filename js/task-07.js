// const input = document.getElementById('font-size-control');
// const span = document.getElementById('text');

const box = {
    inputEl: document.getElementById('font-size-control'),
    spanEl: document.getElementById('text'),
}

box.inputEl.addEventListener(`input`, callback);
    function callback(event) {
  return (box.spanEl.style.fontSize = event.currentTarget.value + "px");
}



// const fontSizeController = document.querySelector("#font-size-control");
// const changingTextSize = document.querySelector("#text");

// fontSizeController.addEventListener("input", onControllerInput);
// function onControllerInput(event) {
//   return (changingTextSize.style.fontSize = event.currentTarget.value + "px");
// }

// const fontEl = document.getElementById("text");
// document.getElementById("font-size-control").addEventListener("change", function() {
//     fontEl.style.fontSize = this.value+'px';
//   });



