const tinderUser = new Object()

 tinderUser.id = "12abc"
tinderUser.name =  "sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularuser = {
    email: "some@gmail",
    fullname :{
        userfullname : {
            firstname : "tanishka",
            lastname : "nikam"
             
        }
    }

}
console.log(regularuser.fullname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

const obj3 = Object.assign(obj1, obj2)

console.log(obj1, obj2);
console.log(obj3);

