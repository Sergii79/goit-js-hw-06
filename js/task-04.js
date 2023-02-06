const counter = {
    value: 0,

    decrement() {
        console.log(this);
        this.value -= 1;
    },

    increment() {
        console.log(this);
        this.value += 1;
    },
};

const decrementButton = document.querySelector('button[data-action = "decrement"]');

const incrementButton = document.querySelector('button[data-action = "increment"]');

const counterValue = document.querySelector('#value');


decrementButton.addEventListener("click", () => {
    console.log('click on decrementButton');
    counter.decrement();
    console.log(counter);

    counterValue.textContent = counter.value;
});

incrementButton.addEventListener("click", () => {
    console.log('click on incrementButton');
    counter.increment();
    console.log(counter);

    counterValue.textContent = counter.value;
});