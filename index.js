class Producto {
  constructor(nombre, precio, categoria) {
    this.id
    this.nombre = nombre;
    this.precio = precio;
  }
}

let Producto = [];

function agregarProducto(id, nombre, precio) {
  let nuevoProducto = new Producto(id, nombre, precio);
  inventario.push(nuevoProducto);
  console.log(`Producto ${nombre} agregado correctamente.`);
}


function mostrarProductos() {
  // Ordenamos el inventario alfabéticamente por nombre
  inventario.sort((a, b) => a.nombre.localeCompare(b.nombre));
  inventario.forEach(producto => {
    console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}, Categoría: ${producto.categoria}`);
  });
}

// Interacción con el usuario
let nombre = prompt("Ingresa el nombre del producto:");
let precio = prompt("Ingresa el precio del producto:");
let categoria = prompt("Ingresa la categoría del producto:");

agregarProducto(nombre, precio, categoria);

mostrarProductos();

nombre = prompt("Ingresa el nombre del producto que deseas comprar, tenemos Destornillador , Taladro , Pinza , Martillo , Clavos ");
comprarProducto(nombre);

mostrarProductos();
