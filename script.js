const allOption = [
  "Celsius",
  "Fahrenheit",
  "Kelvin"
];

const temp = document.getElementById("temp");
const unit1 = document.getElementById("unit1");
const unit2 = document.getElementById("unit2");
const result = document.getElementById("result");
const btn = document.getElementById("submit");

// Function to enable/disable the button hover class based on inputs
function checkInputs() {
  const val = parseFloat(temp.value);

  if (
    temp.value !== "" &&
    !isNaN(val) &&
    unit1.value !== "" &&
    unit2.value !== ""
  ) {
    // Physical impossibility check
    if (
      (unit1.value === "Kelvin" && val < 0) ||
      (unit1.value === "Celsius" && val < -273.15) ||
      (unit1.value === "Fahrenheit" && val < -459.67)
    ) {
      result.innerText = "Physically impossible";
      btn.classList.remove("hover");
    } else {
      result.innerText = "";
      btn.classList.add("hover");
    }
  } else {
    result.innerText = "";
    btn.classList.remove("hover");
  }
}

function renderSecondOption() {
  // Clear previous options
  unit2.innerHTML = "";
  let placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "To unit";
  placeholder.disabled = true;
  placeholder.selected = true;
  unit2.appendChild(placeholder);

  // Add all options except selected in unit1
  for (let i = 0; i < allOption.length; i++) {
    if (unit1.value !== allOption[i]) {
      let option = document.createElement("option");
      option.value = allOption[i];
      option.innerText = allOption[i];
      unit2.appendChild(option);
    }
  }

  // After repopulating options, run input check
  checkInputs();
}

// Event listeners to track changes and update UI
temp.addEventListener("input", checkInputs);
unit1.addEventListener("change", () => {
  renderSecondOption();
  checkInputs();
});
unit2.addEventListener("change", checkInputs);

// Initial population and check
renderSecondOption();
checkInputs();


btn.addEventListener("click", () => {
    const tempValue = parseFloat(temp.value);
    selectorFunction(tempValue, unit1, unit2);
});

function selectorFunction(tempValue, unit1, unit2) {
    if (unit1.value === "Fahrenheit" && unit2.value === "Celsius") {
        fahrenheittoCelsius(tempValue);
    } else if (unit1.value === "Fahrenheit" && unit2.value === "Kelvin") {
        fahrenheittoKelvin(tempValue);
    } else if (unit1.value === "Celsius" && unit2.value === "Fahrenheit") {
        celsiustoFahrenheit(tempValue);
    } else if (unit1.value === "Kelvin" && unit2.value === "Celsius") {
        kelvintoCelsius(tempValue);
    } else if (unit1.value === "Celsius" && unit2.value === "Kelvin") {
        celsiusToKelvin(tempValue);
    } else if (unit1.value === "Kelvin" && unit2.value === "Fahrenheit") {
        kelvintoFahrenheit(tempValue);
    }
}

function fahrenheittoCelsius(tempValue) {
 const finalvalue = (tempValue -32) / (1.8)
    result.innerText = `${tempValue} fahrenheit is ${finalvalue.toFixed(2)} °C`;
}

function fahrenheittoKelvin(tempValue) {
    const finalvalue = ((tempValue + 459.67) / 1.8)
    result.innerText = `${tempValue} fahrenheit is ${finalvalue.toFixed(2)} K`;
}

function celsiustoFahrenheit(tempValue) {
    const finalvalue = (tempValue * 1.8) + 32
    result.innerText = `${tempValue} celsius is ${finalvalue.toFixed(2)} °F`;
}

function kelvintoCelsius(tempValue) {
    const finalvalue = tempValue - 273.15
    result.innerText = `${tempValue} kelvin is ${finalvalue.toFixed(2)} °C`;
}

function celsiusToKelvin(tempValue) {
    const finalvalue = tempValue + 273.15
    result.innerText = `${tempValue} celsius is ${finalvalue.toFixed(2)} K`;
}

function kelvintoFahrenheit(tempValue) {
    const finalvalue = ((tempValue - 273.15) * 1.8) + 32
    result.innerText = ` ${tempValue} kelvin is ${finalvalue.toFixed(2)} °F`;
}