const produtos = [
  { name: "Monitor", price: 900, amunt: 20 },
  { name: "Gabinete", price: 250, amunt: 280 },
  { name: "Cadeira Gamer", price: 650, amunt: 8 },
];

console.log("Produto Sem Filtrar ####");
console.log(produtos);

// filtrar produto
console.log("Produto Filtrado Pelo Preço maior que 400 ####");

const filtrarP = produtos.filter((maiorP) => maiorP.price > 400);
console.log(filtrarP);
