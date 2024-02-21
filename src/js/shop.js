lercoffees();
async function lercoffees() {
  const resposta = await fetch("./src/json/dadosShop.json");
  const dadosMenu = await resposta.json();

  dadosMenu.forEach((coffee) => {
    const menu = document.querySelector(".produtos");

    const coffeeColumn = document.createElement("div");
    coffeeColumn.classList.add("col");

    const coffeeCard = document.createElement("div");
    coffeeCard.classList.add("card", "h-100");

    coffeeCard.innerHTML = `
    <img src='${coffee.img}' class="card-img-top img-fluid" alt="Imagem do café ${coffee.id}">
    <div class="card-body">
      <h5 class="card-title text-center" id="coffe-title">${coffee.id} - R$${coffee.features.price}</h5>

      <div class="container-fluid text-center">
        <div class="row">
          <div class="col-6">
            <strong>Type</strong>
            <p>${(coffee.features.type).toUpperCase()}</p>
          </div>
          <div class="col-6">
            <strong>Organic</strong>
            <p>${(coffee.features.organic).toUpperCase()}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <strong>Origin</strong>
            <p>${(coffee.features.origin).toUpperCase()}</p>
          </div>
          <div class="col-6">
            <strong>Roast</strong>
            <p>${(coffee.features.roast).toUpperCase()}</p>
          </div>
        </div>
      </div>
        
      <div class="card-footer">
        <button type="button" class="btn btn-success w-100">Add to cart</button>
      </div>
        `;
    menu.appendChild(coffeeColumn);
    coffeeColumn.appendChild(coffeeCard);
  });
}
