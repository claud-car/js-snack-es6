// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//  Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//   Generare numeri random al posto degli 0 nelle proprietà:
//   Punti fatti e falli subiti. Infine usando la destrutturazione
//   creiamo un nuovo array i cui elementi contengono solo nomi
//   e falli subiti e stampiamo tutto in console.

const squadre = [
  {
    nome: 'Juventus',
    punti_fatti: 0,
    falli: 0
  },
  {
    nome: 'Napoli',
    punti_fatti: 0,
    falli: 0
  },
  {
    nome: 'Inter',
    punti_fatti: 0,
    falli: 0
  },
]

var dati = []

for (let i = 0; i < squadre.length; i++) {
  squadre[i].punti_fatti = generator(0,10);
  squadre[i].falli = generator(0,10);

  const {nome, falli} = squadre[i];
  dati.push(nome, falli);
}


console.log(dati);

// FUNCTION
function generator(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
