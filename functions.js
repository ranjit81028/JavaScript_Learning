function loginUserMessage(userName){
    return `${userName} just logged in`; 
}
console.log(loginUserMessage("Ranjit"));
// how to pass many inputs at once
function calculateNumbers(val1, val2, ...num1){
    return num1;
}// val1 and val2 will take their corresponding values but remaining will go the num1
console.log(calculateNumbers(2,3,4,5,6,7))
// how to pass the object
const obj1 = {
    name: "ranjit",
    age: "19"
}
function objectHandler(object){
    console.log(`user name is: ${object.name} and age of user is: ${object.age}`);
}
objectHandler(obj1);
// anotherway
objectHandler({
    name: "ranjit",
    age: "20"
})
// how to pass the array
const arr = [1, 2, 3, 4, 5, 6];
function printArray(array){
    console.log(array);
}
printArray(arr);
// also
printArray([200,400,500,600]);
