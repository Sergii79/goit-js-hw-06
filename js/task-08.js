//* 1-й варіант:


const form = document.querySelector('.login-form');
console.log(form);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    
    console.log(`email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}

form.addEventListener('submit', handleSubmit);


//* 2-й варіант:


// const form = document.querySelector(".login-form");
// const user = {
//     email: '',
//     password: ''
// };
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const {
//         elements: { email, password }
//     } = event.currentTarget;

//     if (email.value === '' || password.value === '') {
//         return alert('All fields are required!');
//     }

//     user.email = email.value;
//     user.password = password.value;
//     console.log(data);
//     event.currentTarget.reset();
// });