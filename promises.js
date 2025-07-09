const fs = require("fs");

function read(){
  return new Promise(function (resolve){
    fs.readFile("jsnotes.txt", "utf-8", (err, data) =>{
      resolve(data);
    });
  })
}
function onDone(data){
  console.log(data);
}
read().then(onDone);