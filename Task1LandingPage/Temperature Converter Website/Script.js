document.getElementById("convertBtn").addEventListener("click", function() {
  const tempInput = document.getElementById("tempInput").value;
  const unit = document.getElementById("unitSelect").value;
  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("error");

  resultDiv.innerHTML = "";
  errorDiv.innerHTML = "";

  // Validate numeric input
  if (isNaN(tempInput) || tempInput === "") {
    errorDiv.innerHTML = "❌ Please enter a numeric value.";
    return;
  }

  let temp = parseFloat(tempInput);

  // Absolute zero check
  if ((unit === "C" && temp < -273.15) ||
      (unit === "F" && temp < -459.67) ||
      (unit === "K" && temp < 0)) {
    errorDiv.innerHTML = "⚠️ Temperature cannot go below absolute zero!";
    return;
  }

  let celsius, fahrenheit, kelvin;

  // Conversion logic
  if (unit === "C") {
    celsius = temp;
    fahrenheit = (temp * 9/5) + 32;
    kelvin = temp + 273.15;
  } else if (unit === "F") {
    celsius = (temp - 32) * 5/9;
    fahrenheit = temp;
    kelvin = celsius + 273.15;
  } else if (unit === "K") {
    kelvin = temp;
    celsius = temp - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
  }

  // Display results
  resultDiv.innerHTML = `
    🌡️ Converted Values:<br>
    ${celsius.toFixed(2)} °C<br>
    ${fahrenheit.toFixed(2)} °F<br>
    ${kelvin.toFixed(2)} K
  `;
});
