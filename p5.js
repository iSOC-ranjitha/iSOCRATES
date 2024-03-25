//Stearms 
const fs = require ('fs');

const readStream = fs.createReadStream('./docs/iso1.txt',{encoding:'utf-8'});
const WriteSteam = fs.createWriteStream('./docs/iso2.txt');
readStream.on('data',chunk=>{
     console.log(chunk);
    WriteSteam.write(chunk)
});