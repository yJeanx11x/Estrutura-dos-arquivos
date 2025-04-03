// rest
function value(...rest) {
  console.log(...rest);
}
value(1, 2, 3);

//spread

const numbers = [1, 2, 3];
console.log("##### Spread");
console.log(...numbers);

const pess = [
  {
    nome: "Jean",
    idade: 23,
    sexo: "M",
  },
  {
        nome:'Julia',
        idade:20,
        sexo:'F',
        
  }
];
console.log(pess)
console.log(...pess)
