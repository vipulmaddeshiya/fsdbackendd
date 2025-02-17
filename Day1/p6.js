const fs = require('fs');

const write=()=>{

    fs.writeFile("./data.txt","utf8",(err,data)=>{
        if(err)
            console.log("error writing file",err);
        else
        console.log("file written successfully", data)
    })
}

write("I am a new data");