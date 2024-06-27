let products = [
  {
    id: 0,
    image: "https://loremflickr.com/640/480",
    product: "Cat 1 ",
    price: 60.0,
  },
  {
    id: 1,
    image: "https://loremflickr.com/640/480",
    product: "Cat 2",
    price: 80.0,
  },
  {
    id: 2,
    image: "https://loremflickr.com/640/480",
    product: "Cat 2 ",
    price: 120.0,
  },
  {
    id: 3,
    image: "https://loremflickr.com/640/480",
    product: "Cat 3",
    price: 60.0,
  },
  {
    id: 4,
    image: "https://loremflickr.com/640/480",
    product: "Cat 4",
    price: 90.0,
  },
  {
    id: 5,
    image: "https://loremflickr.com/640/480",
    product: "Cat 5 ",
    price: 60.0,
  },
  {
    id: 6,
    image: "https://loremflickr.com/640/480",
    product: "Cat 6 ",
    price: 60.0,
  },
  {
    id: 7,
    image: "https://loremflickr.com/640/480",
    product: "Cat 7 ",
    price: 120.0,
  },
  {
    id: 8,
    image: "https://loremflickr.com/640/480",
    product: "Cat 8",
    price: 60.0,
  },
];

function readProducts() {
  const cards = document.getElementById("cards");
  cards.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <img src="${product.image}" alt="Product image">
            <div class="card-container--info">
                <p>${product.product}</p>
                <div class="card-container--value">
                    <p>$ ${product.price.toFixed(2)}</p>
                    <img class="trash" src="img/lixo.png" alt="Trash Icon" onclick="deleteProduct(${
                      product.id
                    })">
                    <img class="edit" src="img/editar.png" alt="Edit Icon" onclick="updateProduct(${
                      product.id
                    })">
                </div>
            </div>
        `;
    cards.appendChild(card);
  });
}

// Function to create a new product
function createProduct() {
  const form = document.getElementById("product-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const price = parseFloat(document.getElementById("value").value);
    const image = document.getElementById("image").value;
    if (name && price && image) {
      const newProduct = {
        id: products.length,
        image: image,
        product: name,
        price: price,
      };
      products.push(newProduct);
      readProducts();
      form.reset();
    } else {
      alert("Fill all fields!");
    }
  });
}

// Function to delete a product
function deleteProduct(id) {
  if (confirm("Are you sure you want to delete the product?")) {
    products = products.filter((product) => product.id !== id);
    readProducts();
    if (products.length === 0) {
      alert("No products found!");
    }
  }
}

// Function to update a product
function updateProduct(id) {
  const product = products.find((product) => product.id === id);
  if (product) {
    const name = prompt("New product name:");
    const price = parseFloat(prompt("New product price:"));
    const image = prompt("New product image:");
    if (name && price && image) {
      product.product = name;
      product.price = price;
      product.image = image;
      readProducts();
      alert("Product updated successfully!");
    } else {
      alert("Product not found!");
    }
  }
}

// Initialize product reading
readProducts();

// Initialize product creation
createProduct();
