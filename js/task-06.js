const inputEl = document.querySelector('input');
inputEl.addEventListener('blur', checkNumberOfSymbol);
function checkNumberOfSymbol() {
  inputEl.classList.remove(`invalid`, `valid`);
  if (inputEl.value.length !== Number(inputEl.dataset.length)) {
    inputEl.classList.add(`invalid`);
  } else inputEl.classList.add(`valid`);
}