// // const express = require('express');

// // const app =express();
// // const textToSpeech = require('@google-cloud/text-to-speech');
// // const fs = require('fs');
// // app.use(express.static('public'));
// // app.get('/convert', (req, res) => {
// //     // İstekten metni, dil seçimini ve hızı alın
// //     const text = req.query.text;
// //     const language = req.query.language;
// //     const speed = req.query.speed;
  
// //     // Burada metni sese dönüştüren kodu yazın
  
// //     // Son olarak, ses dosyasını indirme yanıtı döndürün
// //   });
// //   // Text-to-Speech istemcisini oluşturun
// // const client = new textToSpeech.TextToSpeechClient();

// // // Dönüştürme seçeneklerini belirleyin
// // const request = {
// //   input: {text: text},
// //   voice: {languageCode: language},
// //   audioConfig: {audioEncoding: 'MP3', speakingRate: speed},
// // };

// // // Ses dosyasını oluşturun ve kaydedin
// // client.synthesizeSpeech(request, (err, response) => {
// //   if (err) {
// //     console.error('Dönüştürme hatası:', err);
// //     return;
// //   }
// //   // MP3 dosyasını kaydedin
// //   fs.writeFile('output.mp3', response.audioContent, 'binary', (err) => {
// //     if (err) {
// //       console.error('Dosya kaydetme hatası:', err);
// //       return;
// //     }
// //     console.log('Ses dosyası başarıyla oluşturuldu.');
// //     // İndirme yanıtını gönderin
// //     res.download('output.mp3');
// //   });
// // });

// // app.listen(3000,()=>{
// //     console.log("3000 portu çalışıyor");
// // })

// const express = require('express');
// const app = express();
// const textToSpeech = require('@google-cloud/text-to-speech');
// const fs = require('fs');
// app.use(express.static('public'));
// app.get('/convert', (req, res) => {
//     // İstekten metni, dil seçimini ve hızı alın
//     const text = req.query.text;
//     const language = req.query.language;
//     const speed = req.query.speed;
  
//     // Text-to-Speech istemcisini oluşturun
//     const client = new textToSpeech.TextToSpeechClient();
  
//     // Dönüştürme seçeneklerini belirleyin
//     const request = {
//       input: {text: text},
//       voice: {languageCode: language},
//       audioConfig: {audioEncoding: 'MP3', speakingRate: speed},
//     };
  
//     // Ses dosyasını oluşturun ve kaydedin
//     client.synthesizeSpeech(request, (err, response) => {
//       if (err) {
//         console.error('Dönüştürme hatası:', err);
//         return;
//       }
//       // MP3 dosyasını kaydedin
//       fs.writeFile('output.mp3', response.audioContent, 'binary', (err) => {
//         if (err) {
//           console.error('Dosya kaydetme hatası:', err);
//           return;
//         }
//         console.log('Ses dosyası başarıyla oluşturuldu.');
//         // İndirme yanıtını gönderin
//         res.download('output.mp3');
//       });
//     });
// });
// app.listen(3000,()=>{
//     console.log("3000 portu çalışıyor");
// });

console.log("test1");

const axios = require('axios');
const express= require('express');
const app = express();
 const fs = require('fs');

 app.use(express.static('public'));
// async function convertToSpeech() {
//   const language = document.getElementById('language').value;
//   const text = document.getElementById('text').value;
  
//   const response = await axios.post('', {
//     headers: {
//       'Authorization': '',
//       'Content-Type': 'application/ssml+xml'
//     },
//     data: `
//       <speak version='1.0' xml:lang='${language}'>
//         <voice xml:lang='${language}' xml:gender='Female'>${text}</voice>
//       </speak>
//     `
//   });
  
//   const audioData = response.data;
//   const filePath = 'output.mp3';
//   fs.writeFile(filePath, audioData, 'binary', (err) => {
//     if (err) throw err;
//     console.log('Dosya kaydedildi');
//   });
// }
async function convertToSpeech() {
  const language = document.getElementById('language').value;
  const text = document.getElementById('text').value;
  
  const response = await axios.post('', null, {
    headers: {
      'Ocp-Apim-Subscription-Key': ''
    }
  });
  
  const token = response.data;
  
  const audioResponse = await axios.post('https://sesdeneme.cognitiveservices.azure.com/speechtotext/v3.0-beta1/text-to-speech', {
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/ssml+xml'
    },
    data: `
      <speak version='1.0' xml:lang='${language}'>
        <voice xml:lang='${language}' xml:gender='Female'>${text}</voice>
      </speak>
    `
  }, {
    responseType: 'arraybuffer'
  });
  
  const audioData = Buffer.from(audioResponse.data).toString('base64');
  
  fs.writeFile('output.mp3', audioData, 'base64', (err) => {
    if (err) throw err;
    console.log('Dosya kaydedildi');
  });
}
console.log("test123");

app.listen(3000,()=>{
  console.log("3000 portu çalışıyor");
})