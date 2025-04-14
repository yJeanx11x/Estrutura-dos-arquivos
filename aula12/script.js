// Imutabilidade

const address1={
  street:'Av.Brasil',
  number:20,
}
// Isso não é uma copia. É uma referência.
const address3=address1
address3.number = 30
console.log('##### referência')
console.log(address3)
console.log('###########')
// Cria um novo objeto utilizando as propriedades e valores de address1
console.log('cria uma novo objeto utilizando as propriedades')
const address2={...address1,street:'Rua Das Perobas',number:298}
console.log(address1,address2)