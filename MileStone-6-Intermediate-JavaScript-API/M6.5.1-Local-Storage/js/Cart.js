const addToCart = () => {
  let itemEl = document.getElementById("item");
  let quantityEl = document.getElementById("quantity");
  const item = itemEl.value;
  const quantity = quantityEl.value;

  itemEl.value = " ";
  quantityEl.value = " ";
  displayCart(item, quantity);
  addProductToCart(item, quantity);
};

// get the Cart;
const getCart = () => {
  const Cart = {};

  return Cart;
};

// add product to the Cart ;
const addProductToCart = (item, quantity) => {
  const Cart = getCart();
  Cart[item] = quantity;
  console.log(Cart);
};

// display the input
const displayCart = (item, quantity) => {
  const CartContainer = document.getElementById("item-container");

  const li = document.createElement("li");
  li.innerText = `${item} : ${quantity}`;
  CartContainer.appendChild(li);
};
