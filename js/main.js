//Cajas base
var caja1 = document.createElement('div');
caja1.id = 'contenedor1';

var body = document.querySelector('body');
body.appendChild(caja1);

//Elementos internos
var borde = document.createElement('div');
borde.id = 'borde';
caja1.appendChild(borde);

var arco1 = document.createElement('div');
arco1.id = 'arco1';
borde.appendChild(arco1);

var centro = document.createElement('div');
centro.id = 'centro';
arco1.appendChild(centro);

var arco2 = document.createElement('div');
arco2.id = 'arco2';
centro.appendChild(arco2);

var bola1 = document.createElement('div');
bola1.id = 'bola1';
borde.appendChild(bola1);

var bola2 = document.createElement('div');
bola2.id = 'bola2';
borde.appendChild(bola2);

var bola3 = document.createElement('div');
bola3.id = 'bola3';
borde.appendChild(bola3);


