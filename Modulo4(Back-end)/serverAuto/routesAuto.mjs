import automobili from "./db/automobili.json" assert {type: "json"}


export const getMarcaAuto = (req, res) => {
    let resArr = []
    for (let i = 0; i < automobili.length; i++) {
        if (automobili[i].marca.toLowerCase() == req.params.marca) { resArr.push(automobili[i]) }
    }
    if (resArr.length > 0) {
        res.status(200).send(resArr);
    } else {
        res.status(404).send({
            message: "Marca dell'auto non trovata",
            error: true,
            data: {}
        })
    }
}