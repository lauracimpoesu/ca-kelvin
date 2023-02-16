//& variable that stands for the value of kelvin which is 293
const kelvin = 293
console.log(kelvin)

//& converting kelvin to celsius by substracting 273 from keving
const celsius = kelvin - 273
console.log(celsius)

//& converting to fahrenheit now
let fahrenheit = celsius * (9 / 5) + 32
console.log(fahrenheit)
fahrenheit = Math.floor(fahrenheit)
console.log(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
