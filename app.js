const express = require('express');

let data = require('./data.js');

const server = express();

server.use(express.json());


server.get('/',(req,res)=>{
    res.send("sayfa sorunsuz çalışıyor2323232323")
});


//ogrenci listeleme 

server.get('/ogrenci',(req,res) =>{
    res.status(200).json(data);
});


server.get('/ogrenci/:id',(req,res)=>{
console.log("req.body",req.body);
    const { id } =req.params;
    const ogrenci = data.find(ogrenci => ogrenci.id === parseInt(id));
    if (ogrenci) {
        res.status(200).json(ogrenci);
    }else{
        res.status(404).send("aradığınız öğrenci bulunamadı");
    }
});


//burada veritabanı kullanmadığımız için geçici bir yöntem kullanıyoruz id için

let next_id=10;

server.post('/ogrenci',(req,res) =>{
 let yeni_ogrenci = req.body;
 yeni_ogrenci.id= next_id;
 next_id++;
 data.push(yeni_ogrenci);
 res.status(201).json(yeni_ogrenci);
});

//silme işlemi 

server.delete('/ogrenci/:id',(req,res)=>{
    const silinece_id = req.params.id;
    const silinecek_ogrenci = data.find(ogrenci => ogrenci.id === number(silinece_id));

    if (silinece_id) {
        data =data.filter(ogrenci=>ogrenci.id !== number(silinece_id))
        res.send(204).end();
    }else{
        res.status(404).send("Silinecek öğrenci bulunamadı.")
    }
});

server.put('/ogrenci/:id',(req,res)=>{
    const guncellenecek_id = req.params.id;
    const guncellenecek_ogrenci = data.find(ogrenci => ogrenci.id === parseInt(guncellenecek_id));

    if (guncellenecek_ogrenci) {
        // Güncellenecek öğrencinin yeni bilgilerini request body'den alalım
        const { ad_soyad, mail } = req.body;
        
        // Eski öğrencinin bilgilerini yeni bilgilerle değiştirelim
        guncellenecek_ogrenci.ad_soyad = ad_soyad;
        guncellenecek_ogrenci.mail = mail;

        // Güncellenen öğrenci bilgilerini gönderelim
        res.status(200).json(guncellenecek_ogrenci);
    } else {
        res.status(404).send("Güncellenecek öğrenci bulunamadı.");
    }
});





server.listen(4000,()=>{
   
    console.log("4000 portu çalışıyor");
});