const nomeCompleto = document.querySelector("#nome");
const email = document.querySelector("#email");
const idade = document.querySelector("#idade");
const tel = document.querySelector("#tel");
const btn = document.querySelector("#btn");
const nome = document.querySelector(".nome");
const email1 = document.querySelector(".email");
const idade1 = document.querySelector(".idade");
const tel1 = document.querySelector(".tel");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  cadastro();
  limparCadastro();
});

function cadastro() {
  const dados = {
    nome: `${nomeCompleto.value}`,
    email: `${email.value}`,
    idade: `${idade.value}`,
    telefone: `${tel.value}`,
  };
  nome.textContent = `Nome Completo : ${nomeCompleto.value}`;
  email1.textContent = `E-mail : ${email.value}`;
  idade1.textContent = `Idade : ${idade.value} `;
  tel1.textContent = `Telefone : ${tel.value}`;
}

function limparCadastro() {
  nomeCompleto.value = "";
  email.value = "";
  idade.value = "";
  tel.value = "";
}
