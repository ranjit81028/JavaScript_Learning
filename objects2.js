const user = {
    fullName : {
        firstName: "Ranjit",
        lastName: "Kumar"
    },
    age : 20,
    location : {
        colony: "new colony",
        dist: "Hazaribagh",
        state: "jharkhand"
    }
}
// creating object inside object
console.log(user);
console.log(user.fullName.firstName);
// how to combine two objects
const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}
const obj2 = {
    4: "d",
    5: "e",
    6: "f"
}// keys should be different for the submerging
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);
// another way
const obj4 = {...obj1, ...obj2};
console.log(obj4);
// accesing the values and keys separately for the object
console.log(Object.keys(user));
console.log(Object.values(user));
// checking the element existence
console.log(user.hasOwnProperty('age'));// true
console.log(user.hasOwnProperty('name'));//false