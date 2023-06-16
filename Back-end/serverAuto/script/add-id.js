import auto from "../db/automobili.json"
import fs from "fs"

try {
    let id = 1;

    let macchine = auto.map(macchina => {
        macchina.id = id;
        id++;
        return macchina;
    });

    fs.writeFileSync('./db/automobili.json', JSON.stringify(macchine, null, '  '));

    console.log("Scrittura del file completata con successo.");
} catch (error) {
    console.error("Si è verificato un errore durante la scrittura del file:", error);
}

