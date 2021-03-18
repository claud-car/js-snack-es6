$(document).ready(function () {
  // bici();

  // let nome = 'bmx';
  // let peso = 3;
  const bikes = [];

  bikes.push({
    nome: 'bmx',
    peso: 3,
  })

  bikes.push({
    nome: 'bici',
    peso: 4,
  })

  bikes.push({
    nome: 'graziella',
    peso: 6
  })

  let index= 0;
  let min = bikes[0].peso;
  for (let i = 1; i < bikes.length; i++) {
    if (bikes[i].peso < min) {
      const{peso} = bikes[i];
      min = peso;
      index = i;
    }
  }

  const{peso} = bikes;
  console.log(`La bici che pesa di meno è: ${bikes[index].nome} con il peso di ${min}`);

})

//FUNCTION

// function bici(){
//
//   var bikes = [];
//
//   bikes.push({
//     nome: 'Mountain Bike',
//     peso: 3,
//   });
//
//   bikes.push({
//     nome: 'BMX',
//     peso: 2,
//   });
//
//   bikes.push({
//     nome: 'Graziella',
//     peso: 6,
//   });
//
//   let min = bikes[0].peso;
//   let index = 0;
//   for (let i = 1; i < bikes.length; i++) {
//     if (bikes[i].peso < min) {
//       min = bikes[i].peso;
//       index = i;
//     }
//   }
//   console.log("La bici che pesa di meno è: " + bikes[index].nome);
//
// }
