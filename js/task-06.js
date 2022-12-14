const inputEl = document.querySelector('input');
inputEl.addEventListener('blur', checkNumberOfSymbol);
function checkNumberOfSymbol() {
  if (inputEl.value.length !== Number(inputEl.dataset.length)) {
    inputEl.classList.add(`invalid`);
  } else inputEl.classList.replace(`invalid`, `valid`);
}