// Names: __________________ & __________________
// Part 3: run this file with:  node part3.js

console.log("A")
setTimeout(() => console.log("B"), 0)
Promise.resolve().then(() => console.log("C"))
console.log("D")

