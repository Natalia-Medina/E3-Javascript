const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const searchForm = document.getElementById("search-form");
const resultContainer = document.getElementById("result-container");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  const pizzaId = parseInt(document.getElementById("pizza-id").value);
  const foundPizza = pizzas.find(pizza => pizza.id === pizzaId);

  resultContainer.innerHTML = ""; // Limpiar el contenedor de resultados

  if (isNaN(pizzaId)) {
      renderErrorMessage("Por favor, ingrese un número válido.");
  } else if (foundPizza) {
      renderPizzaCard(foundPizza);
      localStorage.setItem("lastSearchedPizza", JSON.stringify(foundPizza));
  } else {
      renderErrorMessage("No se encontró ninguna pizza con ese ID.");
  }
});

function renderPizzaCard(pizza) {
  const pizzaCard = document.createElement("div");
  pizzaCard.classList.add("pizza-card");
  
  const pizzaImage = document.createElement("img");
  pizzaImage.src = pizza.imagen;
  
  const pizzaDetails = document.createElement("div");
  const pizzaName = document.createElement("h2");
  pizzaName.textContent = pizza.nombre;
  const pizzaPrice = document.createElement("p");
  pizzaPrice.textContent = `Precio: $${pizza.precio}`;
  
  pizzaDetails.appendChild(pizzaName);
  pizzaDetails.appendChild(pizzaPrice);
  
  pizzaCard.appendChild(pizzaImage);
  pizzaCard.appendChild(pizzaDetails);
  
  resultContainer.appendChild(pizzaCard);
}

function renderErrorMessage(message) {
  const errorMessage = document.createElement("p");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = message;
  
  resultContainer.appendChild(errorMessage);
}

window.addEventListener("load", function () {
  const lastSearchedPizza = JSON.parse(localStorage.getItem("lastSearchedPizza"));
  if (lastSearchedPizza) {
      renderPizzaCard(lastSearchedPizza);
  }
});


