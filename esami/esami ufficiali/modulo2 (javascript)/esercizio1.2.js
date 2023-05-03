/*
    Vi viene fornita una stringa che rappresenta le spese di ogni reparto della vostra societa’, la
    richiesta e’ che troviate il nome del reparto che spende di più e quello che spende meno,
    con i relativi importi totali.
    Segue un esempio di questa stringa:
`
    Cancelleria
    500
    40
    60

    Servizi igienici
    1000
    1
    200

    Vendite
    0
`
    Dovete scrivere quindi una funzione che data in ingresso una stringa simile a quella data sia
    in grado di sommare tutti gli importi e ritornare quanto richiesto, cio’ che puo’ cambiare sono
    i nomi e il numero dei reparti e gli importi, la struttura rimarra’ la stessa.
    In questo esempio andrebbe ritornato un risultato di questo tipo:
    
    [
        {
            "reparto": "Servizi igienici",
            "spesa" : "1201"
        },
        {
            "reparto": "vendite",
            "spesa" : 0
        }
    ]
*/

//come fare a convertire un "numero" in number?
//come prendere una singola parola della stringa e verificare se c'è un numero all'interno?

//prendere una singola parola della stringa
let stringa = `
    Cancelleria
    500
    40
    60

    Servizi igienici
    1000
    1
    200

    Vendite
    0
    `

let s = "Il mio cane si chiama Lucio e ha 2 anni"
//forse è meglio trasformare prima la stringa in array

let array = s.split(" ");
console.log(array);
array.forEach(el => {
    if (el === Number(el)) { }
})

//

function expenses(allExpenses) {
    const rows = allExpenses.split('\n')

    const departments = []

    rows.shift()
    let departmentName = ''
    let totalAmount = 0
    for (let i = 0; i < rows.length; i++) {
        if (departmentName === '') {
            departmentName = rows[i]
            continue
        }

        if (rows[i] === '') {
            departments.push({
                name: departmentName,
                total: totalAmount
            })
            departmentName = ''
            totalAmount = 0
            continue
        }

        totalAmount += parseInt(rows[i], 10)
    }

    if (departments.length == 0) {
        return []
    }

    let maxDepartment = departments[0]
    let minDepartment = departments[0]
    for (let i = 1; i < departments.length; i++) {
        if (departments[i].total < minDepartment.total) {
            minDepartment = departments[i]
        }
        if (departments[i].total > maxDepartment.total) {
            maxDepartment = departments[i]
        }
    }

    return [maxDepartment, minDepartment]
}

console.log(expenses(`
Reparto 1
1
2
3

Reparto 2
0

Reparto 3
9
`))


