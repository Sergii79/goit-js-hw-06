const input = document.getElementById("validation-input");


//* 1-й варіант:

function inputChange(event, onRemove) {
    if (event.target.value.length === Number(input.dataset.length)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
    
    else if 
    (event.target.value.length !== Number(input.dataset.length)) {
        input.classList.remove('valid');
        input.classList.add('invalid');       
    }
}

input.addEventListener('blur', inputChange);


//* 2-й варіант:

// input.addEventListener('blur', (e) => {
//     if (e.currentTarget.value.length == input.dataset.length) {
//         input.classList.add("valid");
//         input.classList.remove("invalid");
//     }
//     else {
//         input.classList.add("invalid");
//         input.classList.remove("valid");
//     }
// });