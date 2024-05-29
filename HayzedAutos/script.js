document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  if (productId) {
    const products = {
      1: {
        name: "Car Model A",
        price: "$20,000",
        description: "A reliable and efficient car model A.",
        image: "car-a.jpg",
      },
      2: {
        name: "Car Model B",
        price: "$25,000",
        description: "A stylish and modern car model B.",
        image: "car-b.jpg",
      },
      // Add more products as needed
    };

    const product = products[productId];

    if (product) {
      const productDetails = document.getElementById("product-details");
      productDetails.innerHTML = `
                <h2>${product.name}</h2>
                <img src="${product.image}" alt="${product.name}" style="width: 100%; max-width: 300px;">
                <p>${product.price}</p>
                <p>${product.description}</p>
            `;
    } else {
      productDetails.innerHTML = "<p>Product not found.</p>";
    }
  }
  // Sign-In Form Submission Handling
  const signInForm = document.getElementById("sign-in-form");
  if (signInForm) {
    signInForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Basic form validation
      if (email === "" || password === "") {
        alert("Please fill in all fields.");
      } else {
        alert(`Signed in with email: ${email}`);
        // Here you can add further sign-in logic like sending the data to a server
      }
    });
  }
});


