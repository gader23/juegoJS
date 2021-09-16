var turno=1;
var vida=100;

//ESTADOS JUGADOR
var vivo=true;
var envenenado=false;
var quemado=false;

//JUGADAS CPU
var atacar=0;
var quemar=1;
var envenenar=2;
var fallar=3;

var pocion=0;
var colaFenix=1;
var pocionQuemaduras=2;
var pocionVeneno=3;

function usarItem(objeto){

  if(objeto==pocion){
    vida+=50;
  }

  if(objeto==colaFenix){
    if(vivo==false){
          vivo=true;
          vida=30;
      }
    else{
          console.log('Ya estas vivo! No se puede usar');
    }
  }

  if(objeto==pocionQuemaduras){
    if(quemado==true){
      quemado=false;
      }
    else {
      console.log('No estas quemado! No se puede usar');
    }
  }

  if(objeto==pocionVeneno){
    if(envenenado==true){
        envenenado=false;
      }
    else {
      console.log('No estas envenenado! No se puede usar');
    }
  }
  muestraEstadoJugador();
}

function muestraEstadoJugador(){
  if(vivo==true){
  console.log('Vida: '+vida);

  if(envenenado==true)
  console.log('Envenenado');

  if(quemado==true)
  console.log('Quemado');
  }
  else{
    console.log('Estas muerto');
  }
}

function juegaTurno(){
  var jugadaCPU=Math.floor(Math.random()*4);
  if(vida<=0)
  {
    vivo=false;
  }

  if(vivo==true){
    if(jugadaCPU==atacar){
      vida-=10;
      console.log('He atacado al jugador');
    }
    if(jugadaCPU==quemar){
      quemado=true;
      console.log('He quemado al jugador');
    }
    if(jugadaCPU==envenenar){
      envenenado=true;
      console.log('He envenenado al jugador');
    }
    if(jugadaCPU==fallar){
      console.log('He fallado');
    }
      muestraEstadoJugador();
  }else {
    console.log('Has muerto');
  }

}
/*var numero2;
var resultado;

function suma(num1,num2){
  var valor;
  num1=parseInt(num1);
  num2=parseInt(num2);

  valor = num1 + num2;
  return(valor);
}

function accion(){
  numero1 = prompt('Introduce el primer numero: ');
  numero2 = prompt('Introduce el segundo numero: ');
  resultado=suma(numero1,numero2);
  console.log(resultado);
}
*/
