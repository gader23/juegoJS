var miCanvas;


function inicializar()
{
  miCanvas=document.getElementById('canvas');
  miCanvas.addEventListener('mousedown',clicRaton,false);
  miCanvas.addEventListener('mouseup',sueltaRaton,false);
    miCanvas.addEventListener('mousemove',posicionRaton,false);
}

function clicRaton(e)
{
   console.log('Pulsado raton');
}

function sueltaRaton(e)
{
   console.log('Liberado raton');
}

function posicionRaton(e)
{
  var x=e.pageX;
  var y=e.pageY;
  console.log('x: '+x+' - y: '+y);
}
