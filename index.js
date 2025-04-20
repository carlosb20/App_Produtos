import lista_produtos from './produtos.js'; 

const arrayimg = [];



lista_produtos.lista_produtos.map((produto) => {
    arrayimg.push(produto.foto);
});

const gal = document.querySelector('.container');
const carro = document.querySelector('.carrosel');

arrayimg.map((imagem) => {

    const div = document.createElement('div');
    div.setAttribute('class', 'item');
    const img = document.createElement('img');
    img.src = `${imagem}`;
    img.width = 150;
    img.height = 150;

    gal.appendChild(div);
    carro.appendChild(div);
    div.appendChild(img);
    
   
   

});