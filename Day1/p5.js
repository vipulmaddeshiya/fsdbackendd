const fs = require('fs');

const read=()=>{

    //const data=fs.

    fs.readFile("./data.txt","utf8",(err,data)=>{
        if(err)
            console.log(err);
        else
        console.log(data)
    })
}
console.log("Before reading")
read();
console.log("After reading")