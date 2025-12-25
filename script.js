const display = document.getElementById("display");
const keys = document.querySelectorAll(".key");

// Allowed keyboard inputs
const allowedKeys = "0123456789+-*/.%";

function append(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// 🔥 Combine both (Click + Keyboard) into one handler
function handleInput(input) {
  input = input.trim();

  if (input === "DEL" || input === "Backspace") return backspace();
  if (input === "AC" || input === "Escape") return clearDisplay();
  if (input === "=" || input === "Enter") return calculate();
  if (allowedKeys.includes(input)) return append(input);
}

// 👇 BUTTON CLICK SUPPORT
keys.forEach(btn => {
  btn.addEventListener("click", () => handleInput(btn.innerText));
});

// 👇 KEYBOARD SUPPORT
document.addEventListener("keydown", (e) => handleInput(e.key));
