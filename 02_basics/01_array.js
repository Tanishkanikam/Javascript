// array

const arry = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const arry2 = new Array(1, 2, 3, 4)
console.log(arry[1]);

arry.push(6)
console.log(arry);
arry.push(9)
console.log(arry);

arry.pop()
console.log(arry);

//arry.unshift(9)
console.log(arry.includes(9));
console.log(arry.indexOf(3));

console.log(arry);

//slice ,splice

const myn1 = arry.slice(1, 3)

console.log(myn1);
console.log("B ", arry);

const myn2 = arry.splice(1, 3)

console.log(myn1);

console.log(myn2);

