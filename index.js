class producto {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

const productoTodos = [];

const producto0 = new producto (0, "Destornillador" , 50, 8);
const producto1 = new producto (1, "Taladro" , 2000, 10);
const producto2 = new producto (2, "Clavo" , 1, 60);
const producto3 = new producto (3, "Tornillo" , 2, 50);
const producto4 = new producto (4, "Martillo" , 250, 5);

productoTodos.push(producto0, producto1, producto2, producto3, producto4);

const buscarProducto = prompt("Bienvenido a la ferretería! Tenemos Destornillador , Taladro , Clavo , Tornillo y Martillo . Indíquenos por qué articulo está interesado");

const identificarProducto = productoTodos.find ( (producto)=> producto.nombre.toLowerCase() == buscarProducto.toLowerCase());

if (identificarProducto){
  alert( `Tenemos ${identificarProducto.nombre}s disponibles y su precio es $ ${identificarProducto.precio} ¡Apurate que sólo nos quedan ${identificarProducto.stock}!`);
} else {
  alert("Lo sentimos, el producto que busca no está disponible.");
}

