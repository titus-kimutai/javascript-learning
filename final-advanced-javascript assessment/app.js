const dataProducts = [];

async function addDataFunc(product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      dataProducts.push(product);
      console.log(`Product added:`, product);
      resolve();
    }, 0);
  });
}

async function addProducts() {
  try {
    await addDataFunc({
      id: 1,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661602441396-67b89b6ac4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Summer Beach Party",
      price: 15,
      date: "July 3, 2022",
      location: "Venice Beach, Los Angeles",
      company: "LA Beach Parties",
    });
    await addDataFunc({
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Angular Nation Expo",
      price: 35,
      date: "October 1-3, 2022",
      location: "Google Hall, San Francisco",
      company: "ArtExpo NY",
    });

    console.log("All products added:", dataProducts);
    populateProducts();
  } catch (error) {
    console.error("Error adding products:", error);
  }
}

function populateProducts() {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";
  productContainer.className = "main";

  dataProducts.map((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    const img = document.createElement("img");
    img.src = product.imageUrl;
    productCard.appendChild(img);

    const title = document.createElement("h2");
    title.textContent = product.title;
    productCard.appendChild(title);

    const price = document.createElement("p");
    price.textContent = `Price: $${product.price}`;
    productCard.appendChild(price);

    const date = document.createElement("p");
    date.textContent = `Date: ${product.date}`;
    productCard.appendChild(date);

    const location = document.createElement("p");
    location.textContent = `Location: ${product.location}`;
    productCard.appendChild(location);

    const company = document.createElement("p");
    company.textContent = `Company: ${product.company}`;
    productCard.appendChild(company);

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    productCard.appendChild(addToCartButton);

    addToCartButton.onclick = () => addToCart(product);

    productContainer.appendChild(productCard);
  });
}

const cart = [];

function addToCart(product) {
  const cartItem = cart.find((item) => item.id === product.id);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCartUI();
}

function deleteProductFromCart(productId) {
  const productIndex = cart.findIndex((item) => item.id === productId);
  if (productIndex !== -1) {
    cart.splice(productIndex, 1);
  }
  updateCartUI();
}

function increaseProductQuantity(productId) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity++;
    updateCartUI();
  }
}

function reduceProductQuantity(productId) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem && cartItem.quantity > 1) {
    cartItem.quantity--;
  } else {
    deleteProductFromCart(productId);
  }
  updateCartUI();
}

function editProductInCart(productId, newQuantity) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity = newQuantity;
    if (cartItem.quantity <= 0) {
      deleteProductFromCart(productId);
    }
    updateCartUI();
  }
}

function updateCartUI() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";

  cart.map((item) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.className = "cart-item";

    const title = document.createElement("h3");
    title.textContent = item.title;
    cartItemElement.appendChild(title);

    const quantity = document.createElement("p");
    quantity.textContent = `Quantity: ${item.quantity}`;
    cartItemElement.appendChild(quantity);

    const increaseButton = document.createElement("button");
    increaseButton.textContent = "+";
    cartItemElement.appendChild(increaseButton);

    increaseButton.onclick = () => increaseProductQuantity(item.id);

    const decreaseButton = document.createElement("button");
    decreaseButton.textContent = "-";
    cartItemElement.appendChild(decreaseButton);

    decreaseButton.onclick = () => reduceProductQuantity(item.id);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    cartItemElement.appendChild(deleteButton);

    deleteButton.onclick = () => deleteProductFromCart(item.id);

    cartContainer.appendChild(cartItemElement);
  });
}
addProducts();
