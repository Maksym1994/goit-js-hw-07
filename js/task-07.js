
const inputEl = document.getElementById("font-size-control");
const spanEl = document.getElementById("text");

inputEl.addEventListener("input", onInputRange);

function onInputRange(event) {
  spanEl.style.fontSize = event.currentTarget.value + "px";
}
