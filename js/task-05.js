const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener('input', (event) => {
    return event.currentTarget.value.trim()
        ? (spanEl.textContent = event.currentTarget.value)
        : (spanEl.textContent = "Anonymous");
})