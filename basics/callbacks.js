function sum(num1, num2, fnToCall){
  const result = num1 + num2;
  fnToCall(result);
}

function display(data){
  console.log(`Answer is : ${data}`);
}
const a = sum(1,3, display);