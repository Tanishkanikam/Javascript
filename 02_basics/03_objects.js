//singleton

//object literals
const symm = Symbol ("key1")
const JsUser = {
    name: "tanishka",
    [symm]: "mykey1",
    age : 18,
    email: "tanishka@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "saturday"]

}
// // console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.[symm]);


JsUser.email = "tanishka@google.com"
// Object.freeze(JsUser)
JsUser.email = "tanishka@gpt.com"
console.log(JsUser);

JsUser.greeting = function(){
console.log("hello js user");
}
// JsUser.greetingTwo = function(){
// console.log(`Hello js user,${this.name});
// }


