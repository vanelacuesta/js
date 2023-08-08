class producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const productoTodos = [];

const producto0 = new producto (0, "Destornillador" , 50);
const producto1 = new producto (1, "Taladro" , 2000);
const producto2 = new producto (2, "Clavo" , 1);
const producto3 = new producto (3, "Tornillo" , 2);
const producto4 = new producto (4, "Martillo" , 250);

productoTodos.push(producto0, producto1, producto2, producto3, producto4);

const buscarProducto = prompt("Bienvenido a la ferretería! Tenemos Destornillador , Taladro , Clavo , Pinza y Martillo . Indíquenos por qué articulo está interesado");

const identificarProducto = productoTodos.find ( (producto)=> producto.nombre.toLowerCase() == buscarProducto.toLowerCase());

if (identificarProducto){
  alert( `El ${identificarProducto.nombre} está disponible por $ ${identificarProducto.precio}`);
} else {
  alert("Lo sentimos, el producto que busca no está disponible.");
}

