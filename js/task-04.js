
const button = {
    sub: document.querySelector("[data-action='decrement']"),
    add: document.querySelector("[data-action='increment']"),
    span: document.querySelector("#value")
}

let counterValue = 0;

const onIncrementClick = () => {
    counterValue += 1;
    button.span.textContent = counterValue;
}

const onDecrementClick = () => {
    counterValue -= 1;
    button.span.textContent = counterValue;
}

button.sub.addEventListener('click', onDecrementClick);
button.add.addEventListener('click', onIncrementClick);

