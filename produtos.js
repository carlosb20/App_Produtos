

var lista_produtos = [];

const prod = '{"produtos":[' +
'{"id": "1","foto":"./img/massa-plastica.jpg","nome": "Massa Plástica ","marca": "Retoque","cont":"1kg"}, ' +
'{"id": "2","foto":"./img/veniz-alto-solidos.jpg","nome": "Verniz Alto Sólido 8937 ","marca":"SHERWIN-WILLIAMS","cont":"900ml"}, ' +
'{"id": "3","foto":"./img/massa-poliester.jpg","nome": "Massa Poliester", "cont":"750g" ,"marca":"SHERWIN-WILLIAMS"}, ' +
'{"id": "4","foto":"./img/massa-plasticaRHAI.jpg","nome": "Massa Plástica RHAI", "cont":"1kg" ,"marca":"RHAI"},' +
'{"id": "5","foto":"./img/Resina.jpg","nome": "Resina Para Laminação ","marca":"max Rubber","cont":"990g"},' +
'{"id": "6","foto":"./img/kpo.jpg","nome": "Adesivo Kpo Maxived ","marca":"max Rubber","cont":"400g"},' +
'{"id": "7","foto":"./img/colar.png","nome": "Kit de Reparo  Plásticas ","marca":"SHERWIN-WILLIAMS","cont":"75ml"},' +
'{"id": "8","foto":"./img/fita_larga.jpg","nome": "Fita Crepe  ","marca":"3m","cont":"48x40"},' +
'{"id": "9","foto":"./img/fita_fina3m.png","nome": "Fita Crepe","marca":"3m","cont":"18X40"},' +
'{"id": "10","foto":"./img/roquete.jpg","nome": "Disco de Hookt Orbital","marca":"NORTON","cont":"102"},' +
'{"id": "11","foto":"./img/vinilico.jpg","nome": "Preto Fosco Vinílico ","marca":"SHERWIN-WILLIAMS","cont":"600ml"},' +
'{"id": "12","foto":"./img/bobina_grande.jpg","nome": "Bobina Papel Grande","marca":"SHERWIN-WILLIAMS","cont":"5kg 90cm"},' +
'{"id": "13","foto":"./img/bobina_pequena.jpg","nome": "Bobina Papel pequena","marca":"SHERWIN-WILLIAMS","cont":"2.5kg 45cm"},' +
'{"id": "14","foto":"./img/PRIMER-PU.jpg","nome": "Primer Pu Full 4.1.1 Anjo","marca":"Anjo","cont":" 900ml"},' +
'{"id": "15","foto":"./img/aluminio.jpg","nome": "Alumínio Opalescente para rodas Sintético","marca":"SHERWIN-WILLIAMS","cont":" 3.6  ml"},' +
'{"id": "16","foto":"./img/tinta-preta.jpg","nome": "Tinta Sintética - Preto Fosco","marca":"Brasilux","cont":" 3,6 ml"},' +
'{"id": "17","foto":"./img/thinner-comum.jpg","nome": "Thinner Comum","marca":"Anjo","cont":" 5L"},' +
'{"id": "18","foto":"./img/thinner-pu.jpg","nome": "Thinner PU","marca":"skylack","cont":" 5L"},' +
'{"id": "19","foto":"./img/lixa-1200.jpg","nome": "Lixa D Água 1200 ","marca":"3m","cont":" Folhas"},' +
'{"id": "20","foto":"./img/lixa-2000.jpg","nome": "Lixa D Água 2000 ","marca":"3m","cont":" Folhas"},' +
'{"id": "21","foto":"./img/lixa_a_seco-320.jpg","nome": "Lixa Seca Norton 320 ","marca":"Norton","cont":" Folhas"},' +
'{"id": "22","foto":"./img/lixa-seca-80.jpg","nome": "Lixa Seca Norton 80 ","marca":"Norton","cont":" Folhas"},' +
'{"id": "23","foto":"./img/lixa-seca-150.jpg","nome": "Lixa Seca Norton 150 ","marca":"Norton","cont":" Folhas"},' +
'{"id": "24","foto":"./img/lixa-seca-400.jpg","nome": "Lixa Seca Norton 400 ","marca":"Norton","cont":" Folhas"},' +
'{"id": "25","foto":"./img/lixa-seca-600.jpg","nome": "Lixa Seca Norton 600 ","marca":"Norton","cont":" Folhas"},' +
'{"id": "26","foto":"./img/lixa-seco-220.png","nome": "Lixa Seca Norton 220 ","marca":"Norton","cont":" Folhas"},' +
'{"id": "27","foto":"./img/massa-de-polir.jpg","nome": "Massa de Polir Branca nº2 ","marca":"Massa de Polir Branca nº2 Base Querosene Lazzuril Sherwin-Williams","cont":" 1kg"},' +
'{"id": "28","foto":"./img/cera-Grand-Prix.jpg","nome": "Cera Grand Prix ","marca":"Cera Grand Prix","cont":" 200g"},' +
'{"id": "29","foto":"./img/estopa.jpg","nome": "Estopa Branca Extra","marca":"AMF RESIDUOS","cont":" 500g"},' +
'{"id": "30","foto":"./img/disco_80.jpg","nome": "Disco de Hookt Orbital 80","marca":"Norton","cont":" Discos"},' +
'{"id": "31","foto":"./img/disco_150.jpg","nome": "Disco de Hookt Orbital 150","marca":"Norton","cont":" Discos"},' +
'{"id": "32","foto":"./img/disco_400.jpg","nome": "Disco de Hookt Orbital 400","marca":"Norton","cont":" Discos"},' +
'{"id": "33","foto":"./img/disco_220.jpg","nome": "Disco de Hookt Orbital 220","marca":"Norton","cont":" Discos"},' +
'{"id": "34","foto":"./img/cinza_grafite.jpg","nome": "Cinza Grafite","marca":"BRAZILIAN","cont":" 3,6 ml"},' +
'{"id": "35","foto":"./img/cinza_moldura.jpg","nome": "Cinza moldura nitro","marca":"Brasilux","cont":" 3,6 ml"},' +
'{"id": "36","foto":"./img/azul_ral.jpg","nome": " Azul Ral PU 5002","marca":"SHERWIN-WILLIAMS","cont":" 3,6 ml"},' +
'{"id": "37","foto":"./img/branco_geada.jpg","nome": "Branco Geada 2 Pu","marca":"SHERWIN-WILLIAMS","cont":" 3,6 ml"},' +
'{"id": "38","foto":"./img/branco_polar.jpg","nome": "Branco polar Pu","marca":"SHERWIN-WILLIAMS","cont":" 3,6 ml"},' +
'{"id": "39","foto":"./img/catalizador.jpg","nome": "Catalizador para Pu","marca":"SHERWIN-WILLIAMS","cont":" 900 ml"},' +
'{"id": "40","foto":"./img/cinza_pu.jpg","nome": " Cinza PU 7043","marca":"SHERWIN-WILLIAMS","cont":" 3,6 ml"},'+
'{"id":"41" , "foto":"/img/preto-semi-brilho.jpg","nome":"Esmalte Sintetico Preto Semi Brilho","marca":"Brasilux","cont":"3.6ml"}'+ 


']}'; 


const produtos = JSON.parse(prod);

produtos.produtos.map((produto) => {
    
    lista_produtos.push(produto);
    
  });


export default {lista_produtos};