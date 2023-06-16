/*

HO AVUTO TANTI PROBLEMI.
INIZIALMENTE PENSAVO FOSSE LINEARE COME COSA E INVECE MI SONO RESO CONTO CHE MI DEVO ESERCITARE DI PIU'
HO AVUTO PROBLEMI CON IL FS.WRITEFILE E IL FS.READFILE PERCHE' IL MIO FILE JSON RIMANE SEMPRE VUOTO
HO PROVATO IN TUTTI I MODI A SISTEMARE IL PROBLEMA MA NON CI SONO RIUSCITO. HO PROVATO A MODIFICARE IL PATH,
HO CHIESTO A CHATGPT COME FARE, HO CANCELLATO I NODE_MODULES E LI HO REINSTALLATI, MA NIENTE. IL MIO FILE JSON
RIMANE SEMPRE VUOTO. QUESTA COSA MI HA TOLTO MOLTO TEMPO.
DI CONSEGUENZA HO USATO POSTMAN, MA AD AOGNI RIAVVIO DEL FILE DOVEVO FARE VARIE CHIAMATE POST PER AGGIUNGERE
NUOVAMENTE MATERIALE DENTRO AL FILE JSON
ANCHE QUESTA COSA MI HA DISTURBATO
COMUNQUE RIMANGO COL DUBBIO SE FOSSI RIUSCITO A COMPLETARE L'ESAME ANCHE SENZA QUESTI PROBLEMI.

HO IMPOSTATO L'INVIO DELLA E-MAIL ALLE ORE 15.30 GIA DA PRIMA. SPERO FUNZIONI

E' STATO UN PIACERE ESSERE TUO ALUNNO

GRAZIE DI TUTTO

CI VEDIAMO PER IL PROGETTO FINALE

*/











import express from 'express'
// import axios from 'axios'
import {
    getAlbums,
    addAlbum,
    updateAlbum,
    getSingleAlbum,
    deleteAlbum
} from './routesAlbum.mjs'

// import {
//     updatePhoto,
// }
//     from './routesPhoto.mjs'
const app = express()
import bodyParser from 'body-parser'
import { updatePhoto } from './routesPhoto.mjs'
app.use(bodyParser.json())


const port = 3000

//Per prima cosa provo a fare delle chiamate per vedere come risponde il server
// STO UTILIZZANDO POSTMAN PER FARE CHIAMATE, CREARE, AGGIUNGERE ECC
//Creo le prima chiamata per vedere se tutto funziona
//Poi provo a creare un album e vedere se il server risponde
//L'album lo creo vuoto, con le chiavi elencate nel file pdf consegnato e lascio tutto a stringa vuota
//perchè sarà l'utente che aggiunge il nome all'album, piuttosto che alla foto ecc. 
//Stessa cosa per quanto rigurda le immagini che lascio con un oggetto vuoto che amplierò successivamente
//quando vado a fare l'aggiunta di una singola foto
//Aggiungo l'album
//Modifico l'album
//Cancello l'album


app.get('/', (req, res) => {
    res.send("<h1>Benvenuto in Photoazon! Guarda comodamente i tuoi album sul tuo smartphone</h1>")
})

//chiamate per creare album
//chiamate per cancellare album
//chiamate per aggiungere agli album


app.get("/albums", getAlbums) //chiamata per visualizzare album
app.put("albums/:name", updateAlbum)//chiamata per aggiornare un album esistente
app.post("/albums", addAlbum) //chiamata per creare un album
app.get("/albums/:name", getSingleAlbum) //chiamata per un singolo album
app.put("albums/:name", deleteAlbum) //chiamata per cancellare un album

//app.put("/albums/:name/photos", updatePhoto) //chiamata per aggiungere una foto 


app.listen(port, () => {
    console.log(`Il server è online sulla porta http://localhost:${port}`)
})