function sum(num1, num2){
  console.log(num1 + num2);
}
function greet(){
  console.log(`hello`);
}
setTimeout(()=>sum(1, 3), 1*40000);
setTimeout(greet, 1*3000);