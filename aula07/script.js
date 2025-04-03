const product = ["Teclado", "Mouse", "Monitor"];
const pesq = "Mouss";

//filtra se á o poduto na lista

const filtrar = product.filter((product) => product.includes(pesq));

// Verifica se á um produto com o nome da pesquisa

if (filtrar.includes(pesq) == false)
  console.log("Esse Produto Não Está em estoque.");
else console.log(`Produto ENCONTRADO: ${filtrar}`);

const products = [
  { descrition: "teclado", price: 150, promotion: true },
  { descrition: "Mouse", price: 70, promotion: false},
  { descrition: "Monitor", price: 900, promotion: true },
];
//Exemplo de um filtro de produtos na promoção

const promotion=products.filter((promo)=>promo.promotion == true)
console.log(promotion)