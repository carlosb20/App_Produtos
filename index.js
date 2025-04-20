import lista_produtos from './produtos.js'; 

const arrayimg = [];



lista_produtos.lista_produtos.map((produto) => {
    arrayimg.push(produto.foto);
});

const gal = document.querySelector('.container');
const carro = document.querySelector('.carrosel');

gal.style.display = 'flex';
gal.style.overflow  = 'hidden';

//carro.style.position = 'absolute';
carro.style.display = 'flex';
carro.style.gap = '10px';
//carro.style.overflow = 'hidden';
//carro.style.left = '100px';



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

const itens = [...document.querySelectorAll('.item')];



var vr = -0;
var x = 0;


const evento = () => {

    itens.forEach((item) => {
        console.log(item);
        
    
    });

    //setInterval(evento, 100);
}

evento();


//itens[0].style.position = 'relative';

//console.log(itens[0].style.left = '-100px');