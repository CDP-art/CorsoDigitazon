import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'
app.use(bodyParser.json())
import automobili from "./db/automobili.json" assert{type: "json"}
import { getMarcaAuto } from './routesAuto.mjs'
const app = express()
const port = 3000

//in questo modo viene fatta una chiamata get all'avvio del server
app.get('/', (req, res) => {
    res.send("Se inserisci nell'URL '/automobili' vedrai un file json di automobili italiane")
})

//in questo modo viene fatta una chiamata get al path (percorso) stabilito da noi
app.get("/automobili", (req, res) => {
    res.send(automobili)
})

//in questo modo viene fatta una chiamata get al path (percorso) stabilito da noi facendo in modo da ricercare le auto tramite la marca che vuole il cliente.
//:marca sta a stabilire che marca è una variabile che contiene quello che scrive il cliente e sarà collegato alla marca dell'auto.
app.get("/automobili/:marca", getMarcaAuto)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})