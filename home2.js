
import lista_produtos from './produtos.js';

const urlParams = new URLSearchParams(window.location.search);
const produtoId = urlParams.get('id');

const produto = lista_produtos.lista_produtos[produtoId - 1];   

const foto = document.getElementById('foto');
const nome = document.getElementById('nome');
const descricao = document.getElementById('descricao'); 
const cont = document.getElementById('cont');

foto.src = produto.foto;
foto.width = 250;
nome.innerHTML = produto.nome;
descricao.innerHTML =`Marca : ${produto.marca}`;
cont.innerHTML = `Quantidade :${produto.cont}`;

console.log(produto.cont);



