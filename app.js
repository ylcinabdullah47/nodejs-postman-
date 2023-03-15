const express = require('express');
const ogrenciRouter = require('./router/ogrenciRouter');


const server = express();

server.use(express.json());
server.use('/ogrenci',ogrenciRouter)


server.get('/',(req,res)=>{
    res.send("sayfa sorunsuz çalışıyor2323232323")
});



server.listen(4000,()=>{
   
    console.log("4000 portu çalışıyor");
});