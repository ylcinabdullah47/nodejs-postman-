const express = require('express');
const data = require('./data.js')

const server = express();
const ogrenciler= [
    {
        id:"1",
        ad_soyad:"ahmet bingül",
        mail:"ahmet@hotmail.com"
    },
    {
        id:"2",
        ad_soyad:"mustafa aktı",
        mail:"mustafa@hotmail.com"
    },
    {
        id:"3",
        ad_soyad:"emre fırça",
        mail:"emre@hotmail.com"
    },
    {
        id:"4",
        ad_soyad:"yusuf yazıcı",
        mail:"yusuf@hotmail.com"
    },
    {
        id:"5",
        ad_soyad:"mehmet ali",
        mail:"mehmet@hotmail.com"
    },
    {
        id:"6",
        ad_soyad:"",
        mail:""
    }
    // {
    //     id:"7",
    //     ad_soyad:"",
    //     mail:""
    // },
    // {
    //     id:"8",
    //     ad_soyad:"",
    //     mail:""
    // },
    // {
    //     id:"9",
    //     ad_soyad:"",
    //     mail:""
    // },
    // {
    //     id:"10",
    //     ad_soyad:"",
    //     mail:""
    // }

];
 






server.get("/",(req,res)=>{
    res.send("hoşgeldinizasdsad ")
});

server.get("/ogrenci",(req,res)=>{
    res.send("listele")
    res.status(200).json(ogrenciler);
    
 
});


let next_id=4;
    server.post("/ogrenci",(req,res) =>{
    let yeni_ogrenci=req.body;
    yeni_ogrenci.id=next_id;
    next_id++;
    data.push(yeni_ogrenci);
    res.status(201).json(yeni_ogrenci);
})


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


server.listen(3000,()=>{
   
    console.log("5000 portu çalışıyor");
});