function asyncAwait(){
  let p = new Promise(function(resolve){
    setTimeout(function(){
      resolve(`hiii there`)
    }, 1*3000)
  });
  return p;
}
async function main(){
  let val= await asyncAwait();
  console.log(val);
}
main();