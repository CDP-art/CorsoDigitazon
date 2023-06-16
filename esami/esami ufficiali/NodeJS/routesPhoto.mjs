import photoazon from "./db/photoazon.json" assert { type: 'json' }
import fs from "node:fs/promises"

const updatePhoto = async (res, req) => {
    let lastID = photoazon.reduce((comulator, a) => a.id > comulator ? a.id : comulator, 0)
    lastID++
    const dataCreazione = new Date()
    const giorno = dataCreazione.getDate();
    const mese = dataCreazione.getMonth() + 1;
    const anno = dataCreazione.getFullYear() % 100;
    const dataCreazioneFormat = `${giorno.toString().padStart(2, '0')}/${mese.toString().padStart(2, '0')}/${anno.toString()}`;
    photoazon.push({ ...{ "id": lastID }, ...req.body, ...{ "hashtags": [], "createdDate": `${dataCreazioneFormat}`, "modifiedDate": `${dataCreazioneFormat}` } })
    await fs.writeFile("/photoazon.json", JSON.stringify(photoazon, null, '  '), (err) => {

        if (err) {
            console.log(err);
            res
                .status(500)
                .send("Foto non aggiunta. Sorry!");
            return
        }

        res.send("Foto aggiunta al tuo album")
    })

}


export {
    updatePhoto
}