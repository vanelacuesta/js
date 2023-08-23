
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
                 gravity: "bottom",
                 close: true,
                 style: {
                     background: "linear-gradient(to right, black, gray)",
                     border: "solid 1px red",
                 }

             }).showToast();
        }
    }
}

eventoCards(todosLosProductos, productos)
console.log (agregadosAlCarrito)