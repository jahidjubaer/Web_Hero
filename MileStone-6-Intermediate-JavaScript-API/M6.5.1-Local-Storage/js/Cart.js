// get the item and quantity from input filed when click the btn ;
const addToCart = () => {
  let itemEl = document.getElementById("item");
  let quantityEl = document.getElementById("quantity");
  const item = itemEl.value;
  const quantity = parseInt(quantityEl.value);

  // empty after click the btn;
  itemEl.value = " ";
  quantityEl.value = " ";

  // call display function ;
  displayCart(item, quantity);
  addProductToCart(item, quantity);
};

// get the Cart;
const getCart = () => {
  // initialize empty cart ;
  let Cart = {};

  // get the if there any available data in local storage ;
  const cartJson = localStorage.getItem("cart");
  if (cartJson) {
    // if there have any data in local storage update the cart ;
    Cart = JSON.parse(cartJson);
  }

  return Cart;
};

// add product to the Cart in local storage ;
const addProductToCart = (item, quantity) => {
  // get the value of  cart
  const Cart = getCart();

  // if there added any item before , update its quantity ;
  // else current quantity ;
  if (Cart[item]) {
    Cart[item] += quantity;
  } else {
    Cart[item] = quantity;
  }

  // convert the cart object to json format ; then set to local storage ;
  const cartJson = JSON.stringify(Cart);
  localStorage.setItem("cart", cartJson);
};

// display the input
const displayCart = (item, quantity) => {
  const CartContainer = document.getElementById("item-container");

  const li = document.createElement("li");
  li.innerText = `${item} : ${quantity}`;
  CartContainer.appendChild(li);
};

// display from local storage ;
const displayFromLS = () => {
  // get what have in cart
  const cart = getCart();

  // display those ;
  for (const product in cart) {
    displayCart(product, cart[product]);
  }
};

displayFromLS();
