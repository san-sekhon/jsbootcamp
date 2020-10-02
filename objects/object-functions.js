function tempConverter(fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    celsius: (fahrenheit - 32) * 5 / 9,
    kelvin: (fahrenheit + 459.67) * 5 / 9
  }
}
console.log(tempConverter(32));