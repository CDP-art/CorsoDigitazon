const m1 = new Map([
  ["name", "Riccardo"],
  ["lastname", "Degni"],
  ["skills", { frontEnd: ["js"], backEnd: ["node"] }],
  [
    "fn",
    function () {
      console.log("hai chiamato fn!");
    },
  ],
  [10, "ciao"],
]);

console.log(m1.get("skills").frontEnd[0]);
m1.get("fn")();
console.log("-------------------");
console.log(m1.has(10));
console.log("-------------------");

const m2 = new Map([["numeroDiMele", 0]]);

function aumentaNumeroDiMeleDi(n) {
  m2.set("numeroDiMele", m2.get("numeroDiMele") + n);
}

aumentaNumeroDiMeleDi(1);
aumentaNumeroDiMeleDi(1);
aumentaNumeroDiMeleDi(4);

console.log(m2.get("numeroDiMele"));
