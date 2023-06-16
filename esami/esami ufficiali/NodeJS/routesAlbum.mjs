import photoazon from "./db/photoazon.json" assert { type: 'json' }
import fs from "node:fs/promises"
import axios from "axios"
import { log } from "console"

//chiamata per vedere tutti gli album
const getAlbums = (req, res) => {
    res.send(photoazon)
}



//aggiunta di un album
const addAlbum = async (req, res) => {
    // const DB_PATH_ALBUMS = '/photoazon.json'
    // let lastID = photoazon.reduce((comulator, a) => Number.parseInt(a.id) > comulator ? Number.parseInt(a.id) : comulator, 0)
    // lastID++;
    // // Formatta la data in gg/MM/YY
    // const dataCreazione = new Date()
    // const giorno = dataCreazione.getDate();
    // const mese = dataCreazione.getMonth() + 1;
    // const anno = dataCreazione.getFullYear() % 100;
    // const dataCreazioneFormat = `${giorno.toString().padStart(2, '0')}/${mese.toString().padStart(2, '0')}/${anno.toString()}`;
    // albums.push({ ...{ "id": lastID }, ...req.body, ...{ "fotografie": [], "hashtags": [], "createdDate": `${dataCreazioneFormat}`, "modifiedDate": `${dataCreazioneFormat}` } })
    // await fs.writeFile(DB_PATH_ALBUMS, JSON.stringify(albums, null, '  '), (err) => {
    //     if (err) {
    //         console.error(err);
    //         res.status(500).end();
    //         return;
    //     } res.status(200).end
    // }
    // )

    try {
        let lastID = photoazon.reduce((comulator, a) => a.id > comulator ? a.id : comulator, 0)
        lastID++
        const dataCreazione = new Date()
        const giorno = dataCreazione.getDate();
        const mese = dataCreazione.getMonth() + 1;
        const anno = dataCreazione.getFullYear() % 100;
        const dataCreazioneFormat = `${giorno.toString().padStart(2, '0')}/${mese.toString().padStart(2, '0')}/${anno.toString()}`;
        photoazon.push({ ...{ "id": lastID }, ...req.body, ...{ "images": [], "hashtags": [], "createdDate": `${dataCreazioneFormat}`, "modifiedDate": `${dataCreazioneFormat}` } })
        await fs.writeFile("/photoazon.json", JSON.stringify(photoazon, null, '  ')),
            res.send("Album aggiunto correttamente")
    } catch (e) {
        console.log(e);
        res
            .status(500)
            .send("Album non aggiunto. Sorry!")
    }

}


//chiamata per un singolo album
const getSingleAlbum = (req, res) => {
    for (let i = 0; i < photoazon.length; i++) {
        if (photoazon[i].name == req.params.name) {
            res.send(photoazon[i])
            res.status(200).end()
            return
        }
    }
    res.send({
        message: "non trovato",
        error: true,
        data: {}
    })
}

//aggiornamento di un album
const updateAlbum = (req, res) => {
    try {
        const idAlbum = req.params.name
        for (let i = 0; i < photoazon.length; i++) {
            if (photoazon[i].name == idAlbum) {
                photoazon[i] = { ...photoazon[i], ...req.body }
                res.status(200).end()
                return
            }
        }
    } catch (e) {
        console.log(e);
        res.status(500).end()
    }
}


//cancellazione di un album
const deleteAlbum = (req, res) => {
    let index = -1
    for (let i = 0; i < photoazon.length; i++) {
        if (photoazon[i].name == req.params.name) {
            index = i
        }
    }
    if (index == -1) {
        res.status(404).end()
    } else {
        photoazon.splice(index, 1)
        res.status(200).end()
    }
};



export {
    getAlbums,
    getSingleAlbum,
    addAlbum,
    updateAlbum,
    deleteAlbum
}