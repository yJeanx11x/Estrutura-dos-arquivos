// Imutabilidade

const address1 = {
  street: "Av.Brasil",
  number: 20,
};
// Isso não é uma copia. É uma referência.
const address3 = address1;
address3.number = 30;
console.log("##### referência");
console.log(address3);
console.log("###########");
// Cria um novo objeto utilizando as propriedades e valores de address1
console.log("cria uma novo objeto utilizando as propriedades");
const address2 = { ...address1, street: "Rua Das Perobas", number: 298 };
console.log(address1, address2);


// shallow copy (cópia superdicial)

const htmlCourse={
  course:'HTML',
  students:[{name:'jean',email:'jean@hotmail.com'}]
}

const jsCourse={
  ...htmlCourse,
  course:'JavaScript'
}
console.log(htmlCourse,jsCourse)
console.log('####### cópia Profunda')
//Deep copy


const jsCourse1={
  ...htmlCourse,
  course:'JavaScript',
  students:[...htmlCourse.students,{name:'Souza',email:'souza@gmail.com'}]
}
console.log(jsCourse1)
//deep copy