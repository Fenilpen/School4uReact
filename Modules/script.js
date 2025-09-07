//to import
// let nm = require('./math.js')
// let obj = require('./math.js')

// console.log(obj.name)
// console.log(obj.age)

// let {sum,name} = require("./math.js")

// let result = sum(1,2) 
// console.log(result);
// console.log(name);


// import funky from"./math.js"
// console.log(funky(5,5))

// import {sum,sub} from"./math.js"

// let result = sum(3,1)
// let result2 = sub(3,2)
// console.log(result,result2);



// example of destructuring using as

import {obj as CN} from"./math.js"

let {name,age,work} = CN

console.log(name,age,work);
