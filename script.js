function convertToFar() {
  const celsius = parseFloat(document.getElementById('celsius').value);
  const fahrenheit = (celsius * 9/5) + 32;
  document.getElementById('output_in_fahrenheit').value = fahrenheit.toFixed(2);
}

function convertToCel() {
  const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
  const celsius = (fahrenheit - 32) * 5/9;
  document.getElementById('output_in_celcius').value = celsius.toFixed(2);
}
