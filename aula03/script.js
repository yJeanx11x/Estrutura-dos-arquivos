// Cria um objeto com propriedades e métodos.
const user={
      email:"jeanlucas@gmail.com",
      age:23,
      name:{
        first_name:"Jean",
        surName:'Lucas'
      },
        address:{
                street:"Rua Y",
                number:18,
                city:"Minas Gerais",
                postal_code:'12345-123'
        },
        message:()=>{
                // Acessando propriedade de objetos
                console.log(`Bem Vindo!${user.name.first_name}`)
        },
}
// Executa o método do objeto.
user.message()