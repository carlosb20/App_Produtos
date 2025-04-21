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
    gal.appendChild(div);
    carro.appendChild(div);
    div.appendChild(img); 
});

const style = document.createElement('style');
style.textContent = `
@keyframes move {
    from { left: 70%; }
    to { left: 0; }
}
`;

document.head.appendChild(style);
const divtempo = [...document.querySelectorAll('#itemtempo')];
const divimtem = [...document.querySelectorAll('.item')];




divimtem.forEach((item) => {
   
    item.style.position = 'absolute';
    item.style.left = '100%';
    item.style.transition = '5s';
    item.animationDelay = '1s';
    
    item.style.animation = 'move 5s linear infinite';
});   

divtempo.forEach((item) => {
    console.log(item);
});











//itens[0].style.position = 'relative';

//console.log(itens[0].style.left = '-100px');