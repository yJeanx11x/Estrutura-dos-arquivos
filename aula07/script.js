// métado findIndex()
const values = [0, 1, 4, 8, 12, 6];
const index = values.findIndex((value) => value > 4);
console.log("Com metado findIndex() =", values[index]);

// Métado find()

const found = values.find((valu) => valu > 10);
console.log("Com metado find() =", found);


//Exemplo com Objeto
const fruits = [
  { name: "apple", quantity: 23 },
  { name: "banana", quantity: 25 },
  { name: "orange", quantity: 52 },
];

const result = fruits.find((frut) => frut.name === "banana");
console.log(result)
