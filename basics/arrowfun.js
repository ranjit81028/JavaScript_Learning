const user = {
    name: "ranjit",
    age: 20,
    welcomeMessage: function(){
        console.log(this.name,"has logged in");
    }
};
user.welcomeMessage();
user.name = "Sumit";
user.welcomeMessage();
console.log(this); // here this is empty object
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 5));
// without the curly braces
const multiplyTwo = (num1, num2) => (num1*num2);// no need to write the return
console.log(multiplyTwo(4, 5));
//immediately invoked functions
(function greet(){
    console.log(`hello everyone`);
})();//
((name) => {
    console.log(`hello ${name}`);
})(`ranjit`);