const fs = require("fs");

fs.readFile("jsnotes.txt", "utf-8", function(err, data){
  if(err){
    console.error(`Error finding the file ${err}`);
    return;
  }
  else
  console.log(data);
})
