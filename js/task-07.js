
const inputEl = document.getElementById("font-size-control");
const spanEl = document.getElementById("text");

inputEl.addEventListener("input", onInputRange);

function onInputRange() {
  spanEl.style.fontSize = `${ inputEl.value }px`;
}
