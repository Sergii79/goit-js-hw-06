const form = document.querySelector(".login-form");
const data = {
    email: '',
    password: ''
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const {
        elements: { email, password }
    } = e.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('All fields are required!');
    }

    data.email = email.value;
    data.password = password.value;
    console.log(data);
    e.currentTarget.reset();
});







// const form = document.querySelector('.login-form');
// console.log(form);

// function handleSubmit(event) {
//     event.preventDefault();
//     const {
//         elements: { login, password }
//     } = event.currentTarget;
    
//     if (login.value === "" || password.value === "") {
//         return alert("Please fill in all the fields!");
//     }
    
//     console.log(`Login: ${login.value}, Password: ${password.value}`);
//     event.currentTarget.reset();
// }

// form.addEventListener('submit', handleSubmit);








// const form = document.querySelector('.login-form');

// function handleSubmit(event) {
//     event.preventDefault();
//     const {
//         elements: { login, password }
//     } = event.currentTarget;
    
//     if (login.value.trim === "" || password.value === "") {
//         return alert("Please fill in all the fields!");
//     }
    
//     const userDetails = { email: email.value, password: password.value }
//     console.log(userDetails);
//     event.correntTarget.reset();
// }

// form.addEventListener('submit', handleSubmit);