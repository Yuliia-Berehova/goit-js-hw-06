let counterValue = 0;


const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEL = document.querySelector("#value");


const onDecrement = (event) => {
    counterValue -= 1;
    valueEL.textContent = counterValue;
};

const onIncrement = (event) => {
    counterValue += 1;
    valueEL.textContent = counterValue;
};

decrementBtn.addEventListener('click', onDecrement);

incrementBtn.addEventListener('click', onIncrement);

