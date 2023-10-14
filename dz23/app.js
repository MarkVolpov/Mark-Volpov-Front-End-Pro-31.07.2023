const basketBtn = document.querySelector("#basket");
const myShopBtn = document.querySelector("#my-shop");
const flowersBtn = document.querySelector("#flowers");
const carsBtn = document.querySelector("#cars");
const pizzaBtn = document.querySelector("#pizza");
const flowers = document.querySelector(".flowers-box");



basketBtn.addEventListener("click", (e) => {
  window.location.hash = "/basket";
});
myShopBtn.addEventListener("click", (e) => {
  window.location.hash = "/";
});
flowersBtn.addEventListener("click", (e) => {
  window.location.hash = "/flowers";
  if (flowers.style.display === "none" || flowers.style.display === "") {
    flowers.style.display = "block";
  } else {
    flowers.style.display = "none";
  }
});
carsBtn.addEventListener("click", (e) => {
  window.location.hash = "/cars";
});
pizzaBtn.addEventListener("click", (e) => {
  window.location.hash = "/pizza";
});

let basket = [];

let flowerRose = {
  category: "Flowers",
  item: "Rose",
  price: 25.99,
};
let flowerPurple = {
  category: "Flowers",
  item: "Purple",
  price: 25.99,
};
let flowerPink = {
  category: "Flowers",
  item: "Pink",
  price: 25.99,
};

const buyFlower2 = document.querySelector("#buy-flower-2");
const buyFlower3 = document.querySelector("#buy-flower-3");
const buyFlower1 = document.querySelector("#buy-flower-1");

buyFlower1.addEventListener("click", (e) => {
  basket.push(flowerRose);
  basketBtn.innerHTML = `Basket(${basket.length})`;
});
buyFlower2.addEventListener("click", (e) => {
  basket.push(flowerPurple);
  basketBtn.innerHTML = `Basket(${basket.length})`;
});
buyFlower3.addEventListener("click", (e) => {
  basket.push(flowerPink);
  basketBtn.innerHTML = `Basket(${basket.length})`;
});

