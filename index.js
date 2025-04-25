import produtos from './produtos.js';
import lista_produtos from './produtos.js'; 


const  getprodutos=(...num)=>{
    //console.log(num[0])
    const arrayimg = [];



lista_produtos.lista_produtos.map((produto) => {
    arrayimg.push(produto.foto);
});

//----------------------------------------------------------------------
const tabe = document.querySelector('.tabela'); // tag tabela
tabe.style.width = '100%';
tabe.style.padding = '4px';
tabe.style.display = 'flex';
tabe.style.flexWrap = 'wrap';
tabe.style.gap = '10px';
tabe.style.alignItems = 'center';
//tabe.style.justifyContent = 'center';
tabe.style.backgroundColor = '#512ee8';

// ------------------------------------------------------------------------

const caption = document.createElement('caption'); // criando 0 caption
    caption.textContent = 'Tabela de produtos';
    caption.style.fontSize = '30px';
    caption.style.marginBottom = '10px';
    //caption.style.fontWeight = 'bold';
    //caption.style.width = '100%';
    caption.style.color = 'rgba(232, 224, 224, 0.8)';
    caption.style.textShadow = '2px 2px 2px rgb(0, 0, 0)'; 
    tabe.appendChild(caption);

// ---------------------------------------------------------------------

const table = document.createElement('table'); // tag table

table.style.border = '1px solid black';
table.style.width = '100%';
table.style.backgroundColor = '#512ee8';
//tabe.style.height = '300px';


caption.appendChild(table);

const tr = document.createElement('tr');// tag tr
tr.style.width = '5px';
//tr.style.fontSize = '10px';
tr.style.fontWeight = 'bold';
tr.style.border = '1px solid #9561ff';
table.appendChild(tr);

//------------------------------------------------------

const quante = document.createElement('th');// tag th
quante.textContent = 'Unid.';
quante.style.padding = '1px';
//quante.style.textAlign = 'start';
quante.style.fontWeight = 'bold';
quante.style.backgroundColor = 'rgba(87, 130, 202, 0.63)';
quante.style.fontSize = '20px'; // quantidade
quante.style.textAlign = 'start';


const th1 = document.createElement('th');// tag th
th1.textContent = 'Produto';
th1.style.padding = '1px';
th1.style.fontSize = '25px';
th1.style.backgroundColor = 'rgba(87, 130, 202, 0.63)';
th1.style.textAlign = 'start';
th1.style.fontWeight = 'bold';
th1.style.fontSize = '20px'; // produto



const th2 = document.createElement('th');// tag th
th2.textContent = 'Marca';
th2.style.padding = '10px';
th2.style.fontSize = '25px';
th2.style.textAlign = 'start';
th2.style.backgroundColor = 'rgba(87, 130, 202, 0.63)';
th2.style.fontWeight = 'bold';
th2.style.fontSize = '20px'; // marca

const peso = document.createElement('th');// tag th
peso.textContent = 'Peso';
peso.style.padding = '10px';
peso.style.textAlign = 'end';
peso.style.fontSize = '20px'; // peso
peso.style.backgroundColor = 'rgba(87, 130, 202, 0.63)';
peso.style.fontWeight = 'bold';

tr.appendChild(quante)
tr.appendChild(th1);
tr.appendChild(th2)
tr.appendChild(peso)

//------------------------------------------------

    num.map((el)=>{
        const tr3 = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');

        td1.style.padding = '10px';
        td1.style.width = '100px';
        td2.style.padding = '10px';
        td3.style.padding = '5px';
        td4.style.padding = '5px';
       
       

        td1.style.fontSize = '20px';
        td2.style.fontSize = '20px';
        td2.style.width = '100px';
        td2.style.fontSize = '18px'; //produto
        td3.style.fontSize = '20px';
        td3.style.fontSize = '15px';
        td3.style.width = '5px';
        td4.style.fontSize = '15px';// peso

        td1.style.fontWeight = 'bold';
        td2.style.fontWeight = 'bold';
        td2.style.width = '10px';
        td3.style.fontWeight = 'bold';
        td3.style.fontSize = '17px';// marca
        td3.style.width = '10px';
        td4.style.fontWeight = 'bold';

        td1.style.border = '1px solid black';
        td1.style.fontSize = '15px'; //quantidade
        
        
        td2.style.border = '1px solid black';
        td2.style.width = '10px';
        td3.style.border = '1px solid black';
        td3.style.width = '10px';
        td4.style.border = '1px solid black';
        
        
        td1.style.backgroundColor = '#683ff0';
        td2.style.backgroundColor = '#683ff0';
        td3.style.backgroundColor = '#683ff0';
        td4.style.backgroundColor = '#683ff0';
        
        console.log(el[1]);
        const eles = lista_produtos.lista_produtos[el[1]]
        console.log(el[0],eles);
        td1.textContent = `${el[0]}`;
        td2.textContent = `${eles.nome}`;
        td3.textContent = `${eles.marca}`;
        td4.textContent = `${eles.cont}`;

        caption.appendChild(tr3);
        tr3.appendChild(td1);
        tr3.appendChild(td2);
        tr3.appendChild(td3);
        tr3.appendChild(td4);

        
    })
}

// #3a1de1 #512ee8 #683ff0 #7e50f7 #9561ff


getprodutos([10,0],[4,2],[5,4],[5,10],[10,20])

getprodutos([3,6],[3,12],[2,24],[8,18],[7,7])


/*
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
    from { left: 70%; }
    to { left: -50px; }
}
`;

document.head.appendChild(style);

*/
  
   





