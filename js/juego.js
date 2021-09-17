function compra(objeto)
{
  switch (objeto) {
    case 1:
      console.log("Has comprado una Pocion");
    break;

    case 2:
      console.log("Has comprado una Magia");
    break;

    case 3:
      console.log("Has comprado una Espada");
    break;

    default:
      console.log("No tengo ni idea de lo que has comprado");
    break;
  }
}
