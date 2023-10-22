const basketBtn = document.querySelector("#basket");
const myShopBtn = document.querySelector("#my-shop");
const flowersBtn = document.querySelector("#flowers");
const carsBtn = document.querySelector("#cars");
const pizzaBtn = document.querySelector("#pizza");
const flowers = document.querySelector(".flowers-box");
const cars = document.querySelector(".cars-box");
const pizza = document.querySelector(".pizza-box");
const clearBasket = document.querySelector("#clearbasket");
const buy = document.querySelector("#buybtn");

basketBtn.addEventListener("click", (e) => {
  window.location.hash = "/basket";
});
myShopBtn.addEventListener("click", (e) => {
  window.location.hash = "/";
});
flowersBtn.addEventListener("click", (e) => {
  window.location.hash = "/flowers";
  if (flowers.style.visibility === "visible") {
    flowers.style.visibility = "hidden";
  } else {
    flowers.style.visibility = "visible";
  }
});
carsBtn.addEventListener("click", (e) => {
  window.location.hash = "/cars";
  if (cars.style.visibility === "visible") {
    cars.style.visibility = "hidden";
  } else {
    cars.style.visibility = "visible";
  }
});
pizzaBtn.addEventListener("click", (e) => {
  window.location.hash = "/pizza";
  if (pizza.style.visibility === "visible") {
    pizza.style.visibility = "hidden";
  } else {
    pizza.style.visibility = "visible";
  }
});

let basket = [];
loadBasketFromLocalStorage();

const basketBox = document.querySelector(".basket-box");

function saveBasketToLocalStorage() {
  localStorage.setItem("basket", JSON.stringify(basket));
}

function loadBasketFromLocalStorage() {
  const savedBasket = localStorage.getItem("basket");
  if (savedBasket) {
    basket = JSON.parse(savedBasket);
    updateBasketCount();
  }
}

function updateBasketCount() {
  basketBtn.innerHTML = `Basket(${basket.length})`;
}

function LocalStorageClear() {
  localStorage.clear(basket);
  basket = [];
  basketBtn.innerHTML = "Basket(0)";
  itemDiv.innerHTML = "Ваші товари";
}

const buyButtons = document.querySelectorAll(".buy-button");

buyButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const item = {
      category: button.parentElement.getAttribute("data-category"),
      item: button.parentElement.getAttribute("data-item"),
      price: parseFloat(button.parentElement.getAttribute("data-price")),
      id: index + 1,
    };
    basket.push(item);
    saveBasketToLocalStorage();
    updateBasketCount();
    window.location.hash = `/${item.category}/${item.id}`;
    itemDiv.innerHTML = JSON.stringify(basket);
    window.alert("Товар додано у кошик");
  });
});

// const basket2 = []

const itemDiv = document.createElement("div");

// for(let key in basket) {
//   basket2.push(key[item,price])
// }

basketBox.appendChild(itemDiv);
itemDiv.innerHTML = "Ваші товари";

clearBasket.addEventListener("click", (e) => {
  LocalStorageClear();
});
