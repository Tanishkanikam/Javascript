const name = "tanishka"
const repocount = 50

console.log(name + repocount + "value");

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('tanishkacc')

console.log(gameName[0]);
console.log(gameName.__proto);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherSting = gameName.slice(-8 , 4)
console.log(anotherSting);

const  newStringOne = "    tanishka    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tanishka.com/tanishka%20nikam"

console.log(url.replace ('%20', '-'))
console.log(url.includes('d'));


