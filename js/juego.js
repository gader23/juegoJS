var canvas;
var ctx;
var FPS=50;

var anchoF=50;
var altoF=50;

var cesped='#34c62f';
var agua='#4286f4';
var tierra='#c6892f';

var escenario=[
  [0,1,0,2,2],
  [0,1,1,2,0],
  [0,0,1,2,1],
  [0,2,2,2,1],
  [2,2,2,0,1]
];

function dibujaEscenario(){
  var color;
  for(y=0;y<5;y++){
    for(x=0;x<5;x++){
      if(escenario[y][x]==0){
        color=cesped;
      }
      if(escenario[y][x]==1){
        color=agua;
      }
      if(escenario[y][x]==2){
        color=tierra;
      }
      ctx.fillStyle=color;
      ctx.fillRect(x*anchoF,y*altoF,anchoF,altoF);
    }
  }
}

function inicializa(){
  canvas=document.getElementById('canvas');
  ctx=canvas.getContext('2d');

  setInterval(function(){
    principal();
  },1000/FPS);
}


function borrarCanvas() {
  canvas.width=500;
  canvas.height=500;
}

function principal() {
  borrarCanvas();
  dibujaEscenario();
}
