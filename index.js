import lista_produtos from './produtos.js'; 

const arrayimg = [];



lista_produtos.lista_produtos.map((produto) => {
    arrayimg.push(produto.foto);
});

const gal = document.querySelector('.container');
const carro = document.querySelector('.carrosel');

carro.style.display = 'flex';
carro.style.position = 'relative';
carro.style.width = '100%';
carro.style.height = '100%';


gal.style.display = 'flex';
gal.style.width = '100%';

gal.style.flexDirection = 'column';
gal.style.background = 'rgb(85, 149, 136)';





arrayimg.map((imagem,index) => {
    
    const div = document.createElement('div');
    div.setAttribute('class', 'item');
    div.setAttribute('id', `itemtempo${index}`);
    const img = document.createElement('img');
    img.src = `${imagem}`;
    img.width = 150;
    img.height = 150;
    img.style.borderRadius = '5px';
    gal.appendChild(div);
    carro.appendChild(div);
    div.appendChild(img); 
});

const style = document.createElement('style');
style.textContent = `
@keyframes move {
    from { left: 80%; }
    to { left: 0; }
}
`;

document.head.appendChild(style);

const divimtem = [...document.querySelectorAll('.item')];

var x = 0

for(x = 0; x < divimtem.length; x++){
    divimtem[x].style.animation = 'move 5s linear infinite';
    divimtem[x].style.animationDelay = `${x*2}s`;
    divimtem[x].style.left = '85%';
    divimtem[x].style.marginTop = '8px';
    divimtem[x].style.position = 'absolute'; 
    
    
}




