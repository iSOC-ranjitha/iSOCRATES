//File System
 const fs = require('fs');
// fs.readFile('./docs/iso.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// fs.writeFile('./docs/iso1.txt','Hello,again Ranjitha',()=>{
//  console.log('File Written Sucessfully')
// });

// if(!fs.existsSync("./assests"))
// fs.mkdir('./assests',err=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('Folder created');
// });
// else{
//     console.log('Folder already exists');
// }


// if(!fs.existsSync("./assests"))
// fs.rmdir('./assests',err=>{
//     if(err){
//         console.log(err);
//     };
// });
// else{
//     console.log('Folder deleted');
// }

if(fs.existsSync("./docs/iso.txt")){
    fs.unlink('./docs/iso.txt',err =>{
        if(err){
            console.log(err);
        }
        console.log("File Deleted")
    });
}


