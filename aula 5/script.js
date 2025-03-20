const btn=document.querySelector('#btn')
const texto=document.querySelector('#inp')
const ul=document.querySelector('ul')
const li=document.createElement('li')




btn.addEventListener('click',(e)=>{
e.preventDefault()

//Quando não estiver Alguma coisa do input não cria uma li
if(texto.value == '') return console.log('erro')

//Cria um li  
const lista=document.createElement('li')
lista.textContent=texto.value
lista.classList.add('list')
ul.append(lista)





})
ul.addEventListener('click',(e)=>{
  
  if(e.target.classList.contains('list')){
   const item =e.target.closest('.list')
   item.remove()
  }
 
 
  }
 )


function formatoBr(valor){
    valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
      return valor
    }
