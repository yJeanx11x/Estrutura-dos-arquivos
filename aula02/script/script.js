const input=document.querySelector('input')
const form=document.querySelector('form')

form.onsubmit=(e)=>{
        e.preventDefault()
const value=input.value
const hasNumber=/\d+/g

if(hasNumber.test(value)) alert('O texto contem números . ')
else console.log('Enviado!')
}