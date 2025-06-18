let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDatev= new Date(2023, 0 , 23 )
console.log(myCreatedDatev.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDatev.getTime());


newDate.toLocaleString('default',{

    weekday : 'long'

})
