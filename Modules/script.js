//to import
// let nm = require('./math.js')
// let obj = require('./math.js')

// console.log(obj.name)
// console.log(obj.age)

let {sum,name} = require("./math.js")

let result = sum(1,2) 
console.log(result);
console.log(name);
