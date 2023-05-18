const fs = require('fs');
const listfile = "list.json"
const data = fs.readFileSync(listfile,"utf-8")
let filename  = process.argv[2];
let Arrayoflist = JSON.parse(data)

if(filename){
    if(Arrayoflist.includes(filename)){
        console.log(` ${filename} is already exists`)
    }else{
        Arrayoflist.push(filename);
        const newfile = JSON.stringify(Arrayoflist)
        fs.writeFile(listfile,newfile,(err,res)=>{
         if(err){
          console.log(err)
         }else{
          fs.writeFile(filename,"",(err,res)=>{
            if(err){
                console.log(err)
            }else{
                console.log("You are Awesome.!")
            }
          })
         }
        })
    }
}else{
    console.log("Please Enter File Name")
}


