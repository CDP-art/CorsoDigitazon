const obj = {
  name: "Riccardo",
  lastname: "Degni",
  skills: {
    frontEnd: [
      "html",
      "css",
      "js",
      "react",
      {
        x: {
          colors: ["blue", "green"],
          fn: function () {
            console.log("hai chiamato fn!");
          },
        },
      },
    ],
    backEnd: ["node", "java", "py", "php"],
  },
};

console.log(obj.skills.frontEnd[4].x.colors[1]);
obj.skills.frontEnd[4].x.fn();
console.log("-------------------");

const obj2 = {
  name: "Riccardo",
  lastname: "Degni",
};

const livelloDiFormalità = "house";
function checkLivelloDiFormalità() {
  if (livelloDiFormalità == "work") return "lastname";
  if (livelloDiFormalità == "house") return "name";
}

console.log("Ciao " + obj2[checkLivelloDiFormalità()]);

/*
In questo caso abbiamo richiamato l'oggetto tramite un array. Nel linguaggio di programmazione php, un array non ha solamente indici incrementali da 0 fino alla lunghezza degli array, ma si possono usare delle keyword per identificare quell'indice. Qui abbiamo usato parte di questo metodo: come indice di un array, gli abbiamo messo una funzione per richiamare la chiave di un oggetto.
*/
