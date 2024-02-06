function numberToHex(num) {
  return num.toString(16).padStart(2, "0");
}

const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const colorHex = document.getElementById("color-hex");
const backgroundEL = document.body;

let state = {
  r: 125,
  g: 255,
  b: 0,
};

const savedState = localStorage.getItem("color-mixer-state");
if (savedState) {
  state = JSON.parse(savedState);
}

function render() {
  localStorage.setItem("color-mixer-state", JSON.stringify(state));

  backgroundEL.style.backgroundColor = `rgb(${state.r}, ${state.g}, ${state.b})`;

  colorHex.textContent =
    "#" + numberToHex(state.r) + numberToHex(state.g) + numberToHex(state.b);

  red.value = state.r;
  green.value = state.g;
  blue.value = state.b;
}

//Event Listener
red.addEventListener("input", () => {
  //State ändern
  state.r = Number(red.value);

  render();
});
green.addEventListener("input", () => {
  //State ändern
  state.g = Number(green.value);

  render();
});
blue.addEventListener("input", () => {
  //State ändern
  state.b = Number(blue.value);

  render();
});

render();
