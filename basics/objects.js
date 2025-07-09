let key1 = Symbol("key1");
const user = {
    name: "Ranjit",
    age: 20, 
    email: "ranjitrocky73@gmail.com",
    location: "Hazaribagh",
    "lastName": "kumar",
    "key1" : "hello"
}
// accessing the values
console.log(user.age);
// if there is string key
console.log(user["lastName"]);
console.log(user["key1"]);
// changing the value
user.age = 45;
console.log(user["age"]);

// freezing the object so that no one can change the value
// Object.freeze(user);
// user.email = "ranjit73@gmail.com";
console.log(user);
// you can also define function to the object
user.greeting = function(){
    console.log(`hello user: ${this.name} ${this.lastName}`);
}
console.log(user.greeting());
