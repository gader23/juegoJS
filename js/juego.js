var fps=10;
var xEscenario=0;

function atacar()
{
  console.log("Has atacado");
}

function mueveEscenario()
{
  xEscenario++;
  console.log(xEscenario);
}

//BUCLE PRINCIPAL
function principal()
{
  mueveEscenario();
}

setInterval(principal,1000/fps);
