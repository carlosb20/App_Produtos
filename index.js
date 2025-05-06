
import lista_produtos from './produtos.js'; 


    //----------------------------------------------------------------------
const tabe = document.querySelector('.tabela'); // tag tabela

tabe.style.width = '100%';
tabe.style.padding = '3px';
tabe.style.display = 'flex';
tabe.style.flexWrap = 'wrap';
tabe.style.gap = '10px';
tabe.style.alignItems = 'start';

var arraypdf = [];

const getprodutos = (text, ...num) => { // fun o que recebe um texto e v rios n meros

    // criando o cabecalho da tabela
   
    //------------------------------------------------------------

    const tabela = document.createElement('table');// titilos
    tabela.setAttribute('class', 'tabelas');
    tabela.style.borderCollapse = 'collapse';
    //tabe.style.border='1px solid rgba(141, 101, 101, 0.71)';
    
    tabe.appendChild(tabela); 

//-------------------- text equipamento --------------------------------- 

    const textr = document.createElement('tr');
    const texth = document.createElement('th');
    const textt = document.createElement('th');
    const texttt = document.createElement('th');
    const textttt = document.createElement('th');

    
    texth.textContent = `${text}`;
    texth.style.color = 'rgba(186, 215, 191, 0.81)';
    
    texth.style.textAlign = 'start';
    texth.style.padding = '3px';
    texth.style.width = '15em';
    texth.style.backgroundColor = 'rgba(140, 225, 29, 0.38)';
    textt.style.backgroundColor = 'rgba(140, 225, 29, 0.38)';
    
    texttt.style.backgroundColor = 'rgba(140, 225, 29, 0.38)';
    textttt.style.backgroundColor = 'rgba(140, 225, 29, 0.38)';

    textt.style.borderRight = '1px solid rgb(69, 62, 62)';
    

    textr.appendChild(texth);
    tabela.appendChild(textr);
    textr.appendChild(texttt);
    tabela.appendChild(textr);

    textr.appendChild(textttt);
    tabela.appendChild(textr);

    textr.appendChild(textt);
    tabela.appendChild(textr);


    //-------------------------------------------------------

    // criando o cabecalho da tabela
    const cabecalho = document.createElement('caption');
    cabecalho.style.width = '100%';
    const textca = document.createElement('th');
    textca.innerHTML = `<h4> Listagem de Material de Pintura  </h4>`;
    textca.style.backgroundColor ='rgba(140, 225, 29, 0.38)';
    textca.style.width = '50em';
    textca.style.height = '70px';
    textca.style.border = '1px solid rgb(94, 55, 55)';
    textca.style.fontSize = '20px';
    textca.style.padding = '30px';
   

// ----------------------- Cabeçalho  ----------------------------------

      
    cabecalho.appendChild(textca);
    tabela.appendChild(cabecalho);
    cabecalho.appendChild(textca);
    tabela.appendChild(cabecalho);

    // criando o titulo da tabela


    
    const titulo_tr = document.createElement('tr');
    tabela.appendChild(titulo_tr);


//----------------tr titlulo ----------------------------------------
    
    // criando o titulo da coluna produto
   
// --------------------- unidade  ---------------------------

    const td1_unidade = document.createElement('td');
    td1_unidade.textContent = `${"Produto"}`;
    td1_unidade.setAttribute('class', 'titulotd');
    td1_unidade.style.backgroundColor =' #3a1de1';
    td1_unidade.style.color = '#c7bebe';
    td1_unidade.style.textAlign = 'center';
    td1_unidade.style.width = '100px';
    td1_unidade.style.padding = '5px';
    td1_unidade.style.border = '1px solid rgb(54, 46, 46)';
    td1_unidade.style.fontSize = '20px';

    // criando o titulo da coluna marca
   
// -------------------  Produto ------------------------------------

    const td2_produto = document.createElement('td');
    td2_produto.setAttribute('class', 'titulotd');
    td2_produto.style.backgroundColor =' #3a1de1';
    td2_produto.style.color = '#c7bebe';
    td2_produto.style.textAlign = 'center';
    td2_produto.style.width = '100px';
    td2_produto.style.padding = '5px';
    td2_produto.style.border = '1px solid rgb(54, 46, 46)';
    td2_produto.style.fontSize = '20px';
    td2_produto.textContent = `${"Marca"}`;
    

    // criando o titulo da coluna quantidade
//----------------- Marca ----------------------------------------

    const td3_marca = document.createElement('td');
    td3_marca.style.backgroundColor =' #3a1de1';
    td3_marca.style.color = '#c7bebe';
    td3_marca.style.textAlign = 'center';
    td3_marca.style.width = '100px';
    td3_marca.style.padding = '5px';
    td3_marca.style.border = '1px solid rgb(54, 46, 46)';
    td3_marca.style.fontSize = '20px';
    td3_marca.textContent = `${"Quantidade"}`;


//--------------------------------------------

    
    const td4_peso = document.createElement('td');
    td4_peso.style.backgroundColor =' #3a1de1';
    td4_peso.style.color = '#c7bebe';
    td4_peso.style.textAlign = 'center';
    td4_peso.style.width = 'inherit';
    td4_peso.style.padding = '5px';
    td4_peso.style.border = '1px solid rgb(54, 46, 46)';
    td4_peso.style.fontSize = '20px';
    td4_peso.textContent = `${"Unidade"}`;

   
// ----------------------------------------
    
    titulo_tr.appendChild(td1_unidade);
    titulo_tr.appendChild(td2_produto);
    titulo_tr.appendChild(td3_marca);
    titulo_tr.appendChild(td4_peso);


    // percorrendo a lista de numeros recebidos e criando as linhas da tabela
    num.map((el)=>{
    
        // pegando o objeto da lista de produtos com o id igual ao numero recebido
        const eles = lista_produtos.lista_produtos[el[1]]
        const tr = document.createElement('tr');
        tabela.appendChild(tr);
    //------------------------------------------------
        const td1 = document.createElement('td'); // unidade
        td1.style.textAlign = 'center';
        td1.style.width = '100px';
        td1.style.padding = '5px';
        td1.style.border = '1px solid rgb(54, 46, 46)';
        td1.style.fontSize = '15px';
        td1.style.color = 'rgb(145, 148, 161)';
        td1.style.backgroundColor = 'rgba(97, 69, 192, 0.7)';

    //----------------------------------------------
        const td2 = document.createElement('td'); // produto
        td2.style.textAlign = 'center';
        td2.style.width = '100px';
        td2.style.padding = '5px';
        td2.style.border = '1px solid rgb(54, 46, 46)';
        td2.style.fontSize = '15px';
        td2.style.color = 'rgb(145, 148, 161)';
        td2.style.backgroundColor = 'rgba(97, 69, 192, 0.7)';
        td2.style.cursor = 'pointer';
        td2.addEventListener('mouseover', () => {
            td2.style.backgroundColor = 'rgba(76, 74, 83, 0.08)';
        })
        td2.addEventListener('mouseout', () => {
            td2.style.backgroundColor = 'rgba(97, 69, 192, 0.7)';
        })
       

    //-------------------------------------- 97 69 192 0.7 -------
        const td3 = document.createElement('td');
        td3.style.textAlign = 'center';
        td3.style.width = '100px';
        td3.style.padding = '5px';
        td3.style.border = '1px solid rgb(54, 46, 46)';
        td3.style.fontSize = '15px';
        td3.style.color = 'rgb(145, 148, 161)';
        td3.style.backgroundColor = 'rgba(97, 69, 192, 0.7)';

    //------------------------------------------------
        const td4 = document.createElement('td');
        td4.style.textAlign = 'center';
        td4.style.width = '100px';
        td4.style.padding = '5px';
        td4.style.border = '1px solid rgb(54, 46, 46)';
        td4.style.fontSize = '15px';
        td4.style.color = 'rgb(145, 148, 161)';
        td4.style.backgroundColor = 'rgba(97, 69, 192, 0.7)';


        td1.textContent = `${eles.nome} `;
        td2.textContent = `${eles.marca}`;
        td3.textContent = `${el[0]}`;
        td4.textContent = `${eles.cont}`;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        td2.addEventListener('click',()=>{
            window.location.href = `home2.html?id=${eles.id}`;  
        })
    })
           
    
}



// #3a1de1 #512ee8 #683ff0rgb(57, 52, 71) #9561ff

getprodutos('equipamento  guindaste',[7,35],[4,39],[10,38],[4,16],[4,17],[4,5],

    [4,1],[2,10],[10,8],[10,7],[5,21],[5,22],[5,23],[5,24],[5,25],[5,20],[5,19],
    [5,18],[102,29],[102,30],[102,32],[3,13],[2,12],[2,11],[5,28])

getprodutos('equipamento  empilhadeira ',[3,6],[3,12],[2,24],[8,18],[7,7],[2,1],[3,5])

export {arraypdf}

//getprodutos('equipamento : empilhadeira ',[3,6],[3,12],[2,24],[8,18],[7,7],[2,1],[3,5])



