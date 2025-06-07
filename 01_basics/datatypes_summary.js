// primitive

// 7 types : string, number , boolean , null , undefined, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol;('123')

console.log(id === anotherId);

//const bigNumber = 556237726826872871827979792n



// reference (non primitive)

//array , objects , functions

const heros = ["shaktiman" , "naagraj" , "doga"]
let mmyObj = {

    name : "tanishka",
    age :  22,
}
const myFunction = function () {
    console.log("hello world");
    
}
console.log(typeof outsideTemp);
