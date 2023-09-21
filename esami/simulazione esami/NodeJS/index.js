

import express from "express"
import axios from "axios"
import cors from "cors"
import bodyParser from 'body-parser'
import fs from "fs/promises"
// import { log } from "console"
// import { header } from "express/lib/request"


const app = express()

app.use(bodyParser.json())
app.use(cors())

const port = 8000


app.get("/", (req, res) => {
    res.send("<h1>Simulazione d'esame</h1>")
})

//Inizio facendo una get all'inidirizzo fornito e aggiungo un headers con chiave "nome" e valore "claudio de paolis"

// app.get("/", async (req, res) => {
//     try {
//         const response = await axios.get("https://37b2-2-44-90-143.ngrok-free.app/root", {
//             headers: {
//                 "nome": "Claudio De Paolis"
//             }
//         });
//         res
//             .status(200)
//             .send(response.data);

//     } catch (e) {
//         console.error(e);
//         res.status(500).end();
//     }
// });

//quello che sto ricevendo è un oggetto dove c'è una chiave e un codice alfanumerico di 12 caratteri
//poi c'è un chiave "children" che come valore è un array che contiene due oggetti che hanno a loro volta una key con un codice di 12 cifre alfanumerico.
//il codice alfanumerico è anche un il percorso della path.
//inserendo quel codice, ricevi altri codici fino ad arrivare al tesoro.
//devo riuscire ad astrarre le key di tutti gli oggetti che ci possono essere
//si arriverà ad un punto dove ci sarà il tesoro con la chiave "treasure" dentro ad un oggetto,
//o ci sarà un array/oggetto vuoto
//devo cercare di creare un algoritmo dove mi genera in modo random le chiavi
//se sono giuste, allora va avanti, sennò "chiave non trovata"
//si ferma quando trova l'ogetto con la chiave "treasure"
//devo sincronizzare la chiave con il path


//posso iniziare creando una stringa vuota a livello globale che sarà il risultato della funzione


// let chiaveAlfanumerica = ""

// function findKey() {

//     const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

//     for (let i = 0; i < 12; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         chiaveAlfanumerica += characters[randomIndex];
//     }
//     return chiaveAlfanumerica;
// }
// findKey()
// console.log(chiaveAlfanumerica)

// //Ho ottenuto la chiave alfanumerica random che la posso confrontare con gli oggetti e modificarne il path




app.listen(port, () => {
    console.log(`Il server è online: http://localhost:${port}/`)
})

// async function wait(ms) {
//     return new Promise(function (resolve) {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     });
// }

// async function searchTreasure(endpoint) {
//     const response = await axios.get(endpoint, {
//         headers: {
//             name: 'Giada Varri'
//         }
//     });
//     const data = response.data;

//     // caso in cui trova la proprietà treasure 
//     if (data.hasOwnProperty('treasure')) {
//         return data.key;  //restituisce key e termina la ricorsione
//     }

//     //caso in cui data.children è un array di oggetti
//     if (Array.isArray(data.children)) {
//         //cicla su data.children e ricava l oggetto child (che a sua volta ha prop key)
//         for (let child of data.children) {
//             //crea l endpoint con la chiave del child
//             const childEndpoint = https://37b2-2-44-90-143.ngrok-free.app/keys/${child.key};
//                 console.log('sto provando la chiave ' + child.key);
//             await wait(500); //aspetta 0.5 sec
//             //fa la ricorsione della funzione passandogli il path con la child.key
//             const hasTreasure = await searchTreasure(childEndpoint);
//             //se la funzione non ritorna false (quindi o si ricorre 
//             // o termina alla riga 80 valorizzando hasTreasure con data.key)
//             if (hasTreasure) {
//                 return hasTreasure; //la funzione ritorna hasTreasure.
//             }
//         }
//     }

//     return false;
// }

// const initialEndpoint = 'https://37b2-2-44-90-143.ngrok-free.app/keys/a0b1c2d3e4f5';

// searchTreasure(initialEndpoint)
//     .then(hasTreasure => {
//         if (hasTreasure) {
//             console.log('Chiave del tesoro: ' + hasTreasure);
//         } else {
//             console.log('La chiave del tesoro non è stata trovata.');
//         }
//     })
//     .catch(error => {
//         console.error(error);
//     });