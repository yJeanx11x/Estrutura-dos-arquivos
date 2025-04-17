// Shallow freezing 
const book = {
    title: "Objetos Imutáveis",
    category: "javaScript",

    author:{
      name:'Jean',
      email:'jean@gmail.com'
    }
  }
// O JavaScript em si não impõe restiçãoes á modificação dos objetos.

// book.category='css'
// console.log(book)

// congela o objeto e impede a modificação

Object.freeze(book)
book.category='css' // não modifica 


// o object.freeze() não impede modificaçãoes profundas em objetos aninhados (shallow freezing).
book.author.name='lucas'
console.log(book)