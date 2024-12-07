// Smooth Scrolling for Navigation
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Products Data
const products = [
  { id: 1, name: "Colorful Guppies", price: 10, img: "images/guppy.jpg" },
  { id: 2, name: "Premium Fish Tank", price: 50, img: "images/tank.jpg" },
  { id: 3, name: "Aquarium Plants", price: 15, img: "images/plants.jpg" },
];

// Render Products Dynamically
const productsContainer = document.getElementById('products');
products.forEach(product => {
  const productDiv = document.createElement('div');
  productDiv.className = 'product';
  productDiv.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button class="add-to-cart" data-id="${product.id}" data-price="${product.price}">Add to Cart</button>
  `;
  productsContainer.appendChild(productDiv);
});

// Cart Functionality
let totalPrice = 0;
document.addEventListener('click', event => {
  if (event.target.classList.contains('add-to-cart')) {
    const price = parseFloat(event.target.getAttribute('data-price'));
    totalPrice += price;
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
  }
});

// Form Validation (for a contact form, if added later)
function validateContactForm() {
  const form = document.getElementById('contact-form');
  const name = form.querySelector('[name="name"]');
  const email = form.querySelector('[name="email"]');
  const message = form.querySelector('[name="message"]');

  if (!name.value.trim()) {
    alert('Name is required');
    return false;
  }
  if (!email.value.trim() || !email.value.includes('@')) {
    alert('Valid email is required');
    return false;
  }
  if (!message.value.trim()) {
    alert('Message is required');
    return false;
  }
  alert('Form submitted successfully!');
  return true;
}
