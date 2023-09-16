const display = document.getElementById("display");

const allowedKeys = [
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
];

document.getElementById("clear").addEventListener("click", function () {
  display.value = display.value.slice(0, -1);
  display.focus();
});

document.getElementById("clearCE").addEventListener("click", function () {
  display.value = "";
  display.focus();
});

document.querySelectorAll(".btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const value = btn.dataset.value;
    display.value += value;
  });
});

display.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    display.value += ev.key;
    return;
  }

  if (ev.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }
});

document.getElementById("equals").addEventListener("click", calculate);

function calculate() {
  const result = eval(display.value);
  display.value = result;
}
