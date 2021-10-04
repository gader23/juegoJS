
var canvas;
var ctx;
var FPS=50;

var imgRex;


function inicializa()
{
  canvas=document.getElementById('canvas');
  ctx = canvas.getContext('2d');


//Cargar imagen rex
  imgRex=new Image();
  imgRex.src ='img/rex.png';


  setInterval(function()
  {
    principal();
  },1000/FPS);
}

var protagonista = function(x,y){
  this.x=x;
  this.y=y;
  this.velocidad=3;
  this.isrotate=false;

  this.dibuja = function(){
      ctx.drawImage(imgRex,this.x,this.y);
  }

  this.texto = function(){
    ctx.font='30px impact';
    ctx.fillStyle = '#555555';
    ctx.fillText('X: ' + this.x,100,100);
  }

  this.arriba = function(){
    this.y-=this.velocidad;
  }

  this.abajo = function(){
    this.y+=this.velocidad;
  }

  this.izquierda = function(){
    this.x-=this.velocidad;
  }

  this.derecha = function(){
    this.x+=this.velocidad;
  }
}

var personaje=function(x,y)
{
  this.x=x;
  this.y=y;
  this.derecha=true;

  this.dibuja=function(){
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(this.x,this.y,50,50);
  }


  this.mueve=function(velocidad){
    if(this.derecha==true){
      if(this.x<400){
      this.x+=velocidad;
      }else {
      this.derecha=false;
      }
    }else {
      if (this.x>50) {
        this.x-=velocidad;
      }else {
        this.derecha=true;
      }
    }
  }
}

var per1=new personaje(10,50);
var per2=new personaje(10,120);
var per3=new personaje(10,230);

var prota=new protagonista(200,200);

document.addEventListener('keydown',function(tecla){
  //console.log(tecla.keyCode);


  //ARRIBA
  if(tecla.keyCode==38){
    prota.arriba();
  }

  //ABAJO
  if(tecla.keyCode==40){
    prota.abajo();
  }

  //IZQUIERDA
  if(tecla.keyCode==37){
    prota.izquierda();
    imgRex.src ='img/rex.png';
  }


  //DERECHA
  if(tecla.keyCode==39){
    prota.derecha();
    imgRex.src ='img/rex1.png';
  }
})



function borrarCanvas(){
  canvas.width=500;
  canvas.height=400;
}

function principal()
{
  borrarCanvas();


  per1.dibuja();
  per2.dibuja();
  per3.dibuja();

  per1.mueve(1);
  per2.mueve(3);
  per3.mueve(7);

  prota.dibuja();
  prota.texto();
  //console.log('funcion');
}
