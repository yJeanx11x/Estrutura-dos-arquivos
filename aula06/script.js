
'use strict'
//Destruição de array e objetos
const dados1=['Jean',23,'jean@email.com']
const [,,emails]=dados1 //ignora o primeiro e o segundo na desestruturação com virgula.
console.log(emails)



const dados={
        nome:'',
        idade:'',
        email:'',
}
const {nome,idade,email}=dados
function newDados({nome,idade,email}){// ({}) nunca pula a ordem como ex : idade,nome,email.
console.log('#### Novo Dado')
        console.log(nome)
        console.log(idade)
        console.log(email)
}
newDados({nome:'jean',idade:24,email:'Jean@gmail.com'})
newDados({nome:'Julia',idade:21,email:'julia@gmail.com'})