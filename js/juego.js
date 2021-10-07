var canvas;
var ctx;
var FPS=50;

var anchoCanvas=400;
var altoCanvas=640;

var anchoTablero=10;
var altoTablero=16;

var anchoF=40;
var altoF=40;

//(12x17)-(10x16)
var tablero=[
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1]
];

var pieza;

var objPieza=function(){
  this.x=0;
  this.y=0;
  console.log('Pieza creada');
};

function inicializaTeclado(){
  document.addEventListener('keydown',function(tecla){
    if(tecla.keyCode==38){
      console.log('arriba');
    }

    if(tecla.keyCode==40){
      console.log('abajo');
    }

    if(tecla.keyCode==37){
      console.log('izquierda');
    }

    if(tecla.keyCode==39){
      console.log('derecha');
    }
  });
}

function inicializa(){

  canvas=document.getElementById('canvas');
  ctx=canvas.getContext('2d');


  inicializaTeclado();

  pieza=new objPieza();

  canvas.style.width=anchoCanvas;
  canvas.style.height=altoCanvas;

  setInterval(function(){
    principal();
  },1000/FPS);
}

function borraCanvas(){

  canvas.style.width=anchoCanvas;
  canvas.style.height=altoCanvas;

}

function principal(){
  borraCanvas();

}
