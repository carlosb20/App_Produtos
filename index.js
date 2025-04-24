import lista_produtos from './produtos.js'; 

const arrayimg = [];



lista_produtos.lista_produtos.map((produto) => {
    arrayimg.push(produto.foto);
});

//----------------------------------------------------------------------
const tabe = document.querySelector('.tabela'); // tag tabela
tabe.style.width = '100%';
tabe.style.textAlign = 'center';
tabe.style.display = 'flex';
tabe.style.justifyContent = 'center';
tabe.style.backgroundColor = 'rgba(131, 73, 73, 0.46)';

// ------------------------------------------------------------------------

const caption = document.createElement('caption'); // criando 0 caption
    caption.textContent = 'Tabela de produtos';
    caption.style.fontSize = '30px';
    caption.style.marginBottom = '10px';
    caption.style.color = 'rgba(232, 224, 224, 0.8)';
    caption.style.textShadow = '2px 2px 2px rgb(0, 0, 0)'; 
    tabe.appendChild(caption);

// ---------------------------------------------------------------------

const table = document.createElement('table'); // tag table

table.style.border = '2px solid black';
table.style.width = '100%';
caption.appendChild(table);

const tr = document.createElement('tr');// tag tr
tr.style.width = '100%';
tr.style.fontSize = '20px';
tr.style.fontWeight = 'bold';
tr.style.border = '1px solid black';
table.appendChild(tr);

//------------------------------------------------------

const quante = document.createElement('th');// tag th
quante.textContent = 'Quantidades';
quante.style.padding = '10px';
quante.style.fontSize = '25px';
quante.style.fontWeight = 'bold';

const th1 = document.createElement('th');// tag th
th1.textContent = 'Produto';
th1.style.padding = '10px';
th1.style.fontSize = '25px';
th1.style.fontWeight = 'bold';

const th2 = document.createElement('th');// tag th
th2.textContent = 'Marca';
th2.style.padding = '10px';
th2.style.fontSize = '25px';
th2.style.fontWeight = 'bold';

const peso = document.createElement('th');// tag th
peso.textContent = 'Peso';
peso.style.padding = '10px';
peso.style.fontSize = '25px';
peso.style.fontWeight = 'bold';

tr.appendChild(quante)
tr.appendChild(th1);
tr.appendChild(th2)
tr.appendChild(peso)

//------------------------------------------------

const  getprodutos=(...num)=>{
    //console.log(num)
    num.forEach((el)=>
        console.log(el)
        //console.log(lista_produtos.lista_produtos[el][num])
    )
    //console.log(lista_produtos.lista_produtos[num[0]][num[1]])

}

getprodutos(0,'nome',2,'nome')




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
  
   





