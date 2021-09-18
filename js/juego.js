var configTeclado={prevent_repeat : true};
var eventoTeclado = new window.keypress.Listener(this,configTeclado);

function pulsaA()
{
  console.log('Has pulsado a');
}

function pulsaAB()
{
  console.log('Has pulsado a y b a la vez');
}

function ataqueEspecial()
{
  console.log('ATAQUE ESPECIAL!!!!');
}

eventoTeclado.simple_combo('a', pulsaA);
eventoTeclado.simple_combo('a b', pulsaAB);
eventoTeclado.sequence_combo('up down a b',ataqueEspecial);
