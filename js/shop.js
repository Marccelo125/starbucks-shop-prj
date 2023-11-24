lercoffees()
async function lercoffees() {
    const resposta = await fetch("./json/dadosShop.json")
    const dadosMenu = await resposta.json()
    
    
    for (coffee of dadosMenu) {
        const menu = document.querySelector(".produtos")
        const itemcoffee = document.createElement("article")
        const descricaocoffee = document.createElement("p")
        
        descricaocoffee.innerHTML = `
        <article class="coffee-board">
        <img src='${coffee.img}' alt="Imagem do café ${coffee.id}"\>
        <h1 class="coffee-title">${coffee.id} - <strong class="coffee-price">R$${coffee.features.price}</strong></h1>
        <article class="coffee-description">
        <p>Type: ${coffee.features.type}</p>
        <p>Organic: ${coffee.features.organic}</p>
        <p>Origin: ${coffee.features.origin}</p>
        <p>Roast: ${coffee.features.roast}</p>
        </article>
        <button>Add to cart</button>
        `
        menu.appendChild(itemcoffee)
        itemcoffee.appendChild(descricaocoffee)
    }
}