/* class producto {
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
 */
console.log(productos)
const productosContainer = document.querySelector("#productos-container")

const cardsAHtml = array => {

  const cards = array.reduce((acc, element) => {
      return acc + `
      <div class="card" id="card-${element.id}">
        <figure>
          <img src=${element.imagen|| "./img/not-found.jpg"} alt="${element.name}">
        </figure>
        <h2>
        ${element.name} ${element.marca}
        </h2>
        <button class="button-card" id="button-${element.id}">
          <h3> ¡Agregar al carrito!</h3>
        </button> 
      </div>
  `
  }, "")
  productosContainer.innerHTML = cards
}
cardsAHtml(productos)

const todosLosProductos = document.querySelectorAll(".button-card")

let agregadosAlCarrito=[]

const eventoCards = ( nodos, array ) => {

     for ( let i = 0; i < nodos.length; i++ ) {

         nodos[i].onclick = (e) => {                               
             const id = e.currentTarget.id.slice(7)
             const buscarProducto = array.find( element => element.id === Number(id))
             agregadosAlCarrito.push(buscarProducto)
             localStorage.setItem("productos", JSON.stringify(agregadosAlCarrito))
             Toastify({
                 text: `¡Se ha añadido  ${ buscarProducto.name } a tu carrito!`,
                 duration: 3000,
                 gravity: "botton",
                 className: "info",
                 style: {
                     background: "linear-gradient(to right, black, gray)",
                 }

             }).showToast();
        }
    }
}

eventoCards(todosLosProductos, productos)
console.log (agregadosAlCarrito)