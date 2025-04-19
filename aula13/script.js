const book={
  title:'Objetos Imutáveis',
  category:'JavaScript',
  author:{
    name:'Jean Lucas',
    email:'jean@gmail.com',
    
  },
}

const updtedBook={
  ...book,
  title:'Aprendendo Css',
  category:'CSS',
}
 // Original intacto.
console.log(book)

// Modificado.
console.log(updtedBook)

// Utilizando operador de dessetruturação (rest operator) para remover propriedades
const {category,...RemovendoCategory}=book
console.log(RemovendoCategory)