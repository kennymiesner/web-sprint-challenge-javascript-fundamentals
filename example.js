const consume = (a, b, cb) => cb(a, b)

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

const greeting = (firstName, lastName) => `Hello, my name is ${firstName} ${lastName}! Nice to meet you!`

console.log(consume(2, 2, add)) // 4
console.log(consume(4, 2, subtract)) // 2
console.log(consume(10, 16, multiply)) // 160
console.log(consume(8, 2, divide)) // 4

console.log(consume("Kenny", "Miesner", greeting)); // Hello, my name is Kenny Miesner! Nice to meet you!
