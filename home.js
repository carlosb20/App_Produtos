

import lista_produtos from './produtos.js';
 
const gallery = document.getElementById('gallery');

lista_produtos.lista_produtos.map((produto) => {
    const div = document.createElement('div');
    div.setAttribute('class', 'card');
    const divbtn = document.createElement('div');
    const img = document.createElement('img');
    const btn = document.createElement('button');

    divbtn.setAttribute('class', 'btn');
    
    
    img.src = `${produto.foto}`;
    img.width = 120;
    img.height = 120;   
    btn.textContent = `${produto.foto}`;

    btn.onclick = () => {
      window.location.href = `home2.html?id=${produto.id}`;
    };
    
    div.appendChild(img);
    divbtn.appendChild(btn);
    div.appendChild(divbtn);
    
    gallery.appendChild(div);

    btn.innerHTML = `${produto.nome}`;
    
  });

  //---------------------------------------------------

  var  listapega = []

  function filterProduto(produto_id) {
    // Garante que produto_id foi passado
    if (!produto_id) {
      console.error("É necessário passar um produto_id");
      return;
    }
  
    const resultado = lista_produtos.lista_produtos.filter((produto) => produto.id == produto_id);
    return resultado;
  }
  
  // Exemplo de uso:
  const produtoFiltrado = filterProduto(1);
  //console.log(produtoFiltrado);
  
const ca=(...pos)=>{
    
    pos.map((poss)=>{
      console.log(poss);
      listapega.push(filterProduto(poss));
    })
    
}
 
ca(1,24,7,15);
//console.log(listapega);

listapega.map((pega,index)=>{
  console.log(pega[0]['nome']);
})

  
console.log(lista_produtos.lista_produtos.length);

 














  
