











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