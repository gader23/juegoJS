var numeroCPU=0;
var numeroUsuario=0;


numeroCPU=Math.floor((Math.random()*10)+1);
do
{
  numeroUsuario=parseInt(prompt("Adivina el numero que he pensado (1-10)"));

  if(numeroUsuario==numeroCPU){
    console.log("Has acertado!");
  }else {
    if(numeroCPU<numeroUsuario)
    {
      alert("El numero es menor")
    }

    if(numeroCPU>numeroUsuario)
    {
      alert("El numero es mayor")
    }
  }
} while (numeroUsuario!=numeroCPU);
