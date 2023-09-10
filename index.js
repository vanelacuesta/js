const url = `https://dummyjson.com/products`;

const cardsAHtml = data => {
    if (!Array.isArray(data)) {
        console.error("Error: Data is not an array:", data);
        return;
    }

    const cards = data.reduce((acc, elemento) => {
        return acc + `
            <div id="producto-${elemento.id}" class="card">
                <div class="container-img">
                    <img src=${elemento.images[0] || "./img/not-found.jpg" } alt=${elemento.title}>
                </div> 
                <h2>
                    ${elemento.title}
                </h2>
                <button class="button-card" id="button-${elemento.id}">
                  <h3> ¡Agregar al carrito!</h3>
                </button> 
            </div>
        `;
    }, "");
    document.querySelector("#productos-container").innerHTML = cards;

    return document.querySelectorAll(".button-card");
};

const changeImageOnHover = (data) => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        const img = card.querySelector('img');
        
        const originalImage = img.src;
        const hoverImage = data[index].images[1] || data[index].images[0]; 
        
        card.addEventListener('mouseenter', () => {
            img.src = hoverImage;
        });

        card.addEventListener('mouseleave', () => {
            img.src = originalImage;
        });
    });
};

const eventoCards = (nodos, array) => {
    nodos.forEach(nodo => {
        nodo.onclick = (e) => {
            const id = e.currentTarget.id.slice(7);
            const buscarProducto = array.find(element => element.id === Number(id));
            agregadosAlCarrito.push(buscarProducto);
            localStorage.setItem("productos", JSON.stringify(agregadosAlCarrito));
            Toastify({
                text: `¡Se ha añadido ${buscarProducto.title} a tu carrito!`,
                duration: 3000,
                gravity: "bottom",
                close: true,
                style: {
                    background: "linear-gradient(to right, black, gray)",
                    border: "solid 1px red",
                }
            }).showToast();
        };
    });
};

let agregadosAlCarrito = [];



fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log(json); 
        const botones = cardsAHtml(json.products);
        changeImageOnHover(json.products);
        eventoCards(botones, json.products);
    })
    .catch(error => {
        console.error("Hubo un error al obtener los datos:", error);
    });
console.log (agregadosAlCarrito)
