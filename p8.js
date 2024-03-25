const http = require('http');

const fs = require('fs');
const server = http.createServer((req, res) => {
    // console.log(req);

    fs.readFile('./assets/index.html',(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            console.log('error exits but still I\'m executing');
        res.write(data);
        res.end();
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000');
})

