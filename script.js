let marie = { prenom: "Marie", nom: "Lyn", age: 12 }

let paul = {  prenom: "Paul", nom: "Zarkos", age: 13 }

let cheryl = {  prenom: "Cheryl", nom: "Pams", age: 13 }

function jeSuis (etudiant) {
console.log("Je suis " + etudiant.prenom + " " + etudiant.nom + " " + "j'ai" + " " + etudiant.age + " " + "ans");
}
jeSuis(marie);
jeSuis(paul);
jeSuis(cheryl);