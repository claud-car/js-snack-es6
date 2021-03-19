// MILESTONE 1
//definisco l'array con oggetti
const gatti = [
  {
    nome: "Porthos",
    eta: 6,
    colore: "nero",
    sesso: "Maschio"
  },
  {
    nome: "Shiro",
    eta: 7,
    colore: "marrone",
    sesso: "Femmina"
  },
  {
    nome: "Gigio",
    eta: 11,
    colore: "beige",
    sesso: "Maschio"
  },
  {
    nome: "Patata",
    eta: 13,
    colore: "nero",
    sesso: "Femmina"
  },
  {
    nome: "Pomello",
    eta: 3,
    colore: "nero",
    sesso: "Maschio"
  },
  {
    nome: "Pirla",
    eta: 17,
    colore: "marrone",
    sesso: "Maschio"
  },
  {
    nome: "Cadeau",
    eta: 4,
    colore: "nero",
    sesso: "Femmina"
  }
]

//ciclo for-each per stampare i dati in html
gatti.forEach((item) => {
  $('#gatti').append(`<li>${item.nome} è di colore ${item.colore}</li><br>`)
});

console.log(gatti);

// MILESTONE 2


//ciclo for-each dell'array per determinare il colore dei fiocchi e sesso
gatti.forEach((item) => {
  let colore = [];
  //condizione per cambiare colore dei fiocchi
  if (item.sesso == "Maschio" && item.eta > 10) {
    //se è maschio ed ha più di 10 anni
    colore = 'azzurro';
  } else if (item.sesso == "Maschio" && item.eta < 10){
    //se è maschio ed ha meno di 10 anni
    colore = 'azzurrochiaro';
  } else if (item.sesso == "Femmina" && item.eta >10){
    //se è femmina ed ha più di 10 anni
    colore = 'rosa';
  } else if (item.sesso == "Femmina" && item.eta <10){
    //se è femmina ed ha meno di 10 anni
    colore = 'rosachiaro'
  }
  //stampo in html con le classi corrispondenti scritte in css
  $('#gatti2').append(`<li class="${colore}">${item.nome} è ${item.sesso}<i class="fas fa-ribbon"></i></li><br>`)
});

//divido in 2 array per poi unire e ordinare i 2 array
const femmine = gatti.filter((item) => item.sesso == 'Femmina');
const maschi = gatti.filter((item) => item.sesso == 'Maschio');

console.log(femmine);
console.log(maschi);

let gattiordinati = [...femmine,...maschi];
console.log(gattiordinati);



// gatti.forEach((item) => {
//
//
//   const gattimaschi = maschi.map((element, i, array) => {
//     let obj = {
//       ...element,
//       opacita: 1
//     }
//     return obj;
//   });
//
//   const gattifemmine = femmine.map((element, i, array) => {
//     let obj = {
//       ...element,
//       opacita: 1.5
//     }
//     return obj;
//   });
//   $('#gatti3').append(`<li">L'opacità del fiocco di ${item.nome} ,gatto di colore ${item.colore} , è ${item.opacita}</li><br>`)
//
//   console.log(item);
// });



//MILESTONE 3

//creo 2 array per i gatti maschi e femmine




///////////////////////////////



// const studenti = ['Dora', 'Andrea', 'Andrea', 'Giuseppe'];
//
// studenti.forEach((elemento, index, array) => {
//   console.log(elemento, array);
// });
//
// const students = [
//   {
//     name: 'Dora',
//     gender: 'F',
//   },
//   {
//     name: 'Andrea',
//     gender: 'M',
//   },
//   {
//     name: 'Giuditta',
//     gender: 'F',
//   }
// ];
//
// students.forEach((item) => {
//   console.log(`${item.name} è ${item.gender}`);
// });
//
//
// const newStudenti = studenti.map((element, i, array) => {
//   if (i%2) {
//     return '';
//   }
//
//   return element;
// });
//
// console.log(newStudenti);
//
// const newStudents = students.map((element, i, array) => {
//   console.log(i);
//   let obj = {
//     ...element,
//     iscritto: true
//   }
//   return obj;
// });
//
// students.map((element, i, array) => {
//   console.log(students);
//   let obj = {
//     ...element,
//     iscritto: true
//   }
//
//   array[i] = obj;
// });
//
// console.log(students);
