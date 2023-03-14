const express = require('express');
// const data = require('./data.js')
const server = express();
const data = require('./ogrenciData.js')
// const ogrenci= require('./ogrenci.json');

// server.get("/",(req,res)=>{
//     res.send("hoşgeldinizasdsad ")
// });

// server.get("/ogrenci",(req,res)=>{
//     res.send("listele")
//     res.status(200).json(ogrenciler);
    
 
// });


// let next_id=4;
//     server.post("/ogrenci",(req,res) =>{
//     let yeni_ogrenci=req.body;
//     yeni_ogrenci.id=next_id;
//     next_id++;
//     data.push(yeni_ogrenci);
//     res.status(201).json(yeni_ogrenci);
// })


// server.post("/posts",(req,res) =>{
//     console.log(req.body);
//     res.send(req.body);
// })


// server.get("/ogrenci",(req,res)=>{
//     res.send(ogrenci);
// })


// boş dizi döndürüyor ekrana doğru veriler gelmiyor

// server.get("/data" ,(req,res)=>{
//     res.send(data);
// });


//yeni yöntem deneme1

// server.get("/data",(req,res)=>{
//     const tableRows = data.map(
//         (item) =>
//           `<tr><td>${item.id}</td><td>${item.ad_soyad}</td><td>${item.mail}</td></tr>`
//       );
//       const table = `<table><tr><th>ID</th><th>Ad Soyad</th><th>Mail</th></tr>${tableRows.join(  ""   )}</table>`;
   
      
//       res.send(table);
//     });

//

server.get('/',(req,res)=>{
    res.send("sayfa sorunsuz çalışıyor2323232323")
});


server.get('/ogrenci',(req,res)=>{
    // öğrenci listesini döndürmek için buraya kod eklenecek
      res.send(data)

});
server.post('/ogrenci',(req,res)=>{
    //yeni öğrenci kayıt etmek için buraya yazılacak
    const yeniOgrenci =req.body;
    console.log(yeniOgrenci)
    res.send("yeni öğrenci kaydedildi");
});
server.put('/ogrenci/:id',(req,res)=>{
    //öğrenci bilgi güncelleme

});

server.delete('/ogrenci/:id',(req,res)=>{
    //öğrenci kayıt silme buraya yazılacak
});




server.listen(3000,()=>{
   
    console.log("3000 portu çalışıyor");
});