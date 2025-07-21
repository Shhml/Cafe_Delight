AOS.init();

// Opening hours check
const statusEl = document.getElementById('open-status');
const now = new Date();
const hour = now.getHours();
const isOpen = hour >= 8 && hour < 22;
statusEl.textContent = isOpen ? '🟢 We are OPEN now!' : '🔴 Sorry, we are CLOSED.';

// Animated Fun Facts
function animateCounter(id, target) {
  let count = 0;
  const increment = Math.ceil(target / 100);
  const el = document.getElementById(id);
  const interval = setInterval(() => {
    count += increment;
    if (count >= target) {
      el.textContent = target;
      clearInterval(interval);
    } else {
      el.textContent = count;
    }
  }, 30);
}


// Smooth scroll for internal links

window.addEventListener('DOMContentLoaded', () => {
  animateCounter('cups-brewed', 1200000);
  animateCounter('happy-customers', 50000);
  animateCounter('years', 10);
});



  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(44, 27, 20, 0.95)'; // dark coffee tone
    } else {
      navbar.style.background = 'transparent';
    }
  });


 // Sticky navbar on scroll
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  const searchToggle = document.getElementById("search-toggle");
  const searchBox = document.getElementById("search-box");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  const cartToggle = document.getElementById("cart-toggle");
  const cartPanel = document.getElementById("cart-panel");

  // Menu items for search
  const menuItems = [
  { name: "Classic Latte", url: "#classic-latte" },
  { name: "Fresh Croissant", url: "#fresh-croissant" },
  { name: "Double Espresso", url: "#double-espresso" },
  { name: "Iced Mocha", url: "#iced-mocha" },
  { name: "Cappuccino", url: "#cappuccino" },
  { name: "Chocolate Muffin", url: "#chocolate-muffin" },
  { name: "Matcha Latte", url: "#matcha-latte" },
  { name: "Macchiato", url: "#macchiato" },
  { name: "Vanilla Frappe", url: "#vanilla-frappe" },
  { name: "Americano", url: "#americano" },
  { name: "Toasted Bagel", url: "#toasted-bagel" },
  { name: "Breakfast Sandwich", url: "#breakfast-sandwich" }
];


  // Toggle Search
  searchToggle.addEventListener("click", (e) => {
    e.preventDefault();
    searchBox.style.display = (searchBox.style.display === "block") ? "none" : "block";
    cartPanel.style.display = "none";
    searchInput.focus();
  });

  // Toggle Cart
  cartToggle.addEventListener("click", (e) => {
    e.preventDefault();
    cartPanel.style.display = (cartPanel.style.display === "block") ? "none" : "block";
    searchBox.style.display = "none";
  });

  // Search Suggestions
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";

    if (query.trim() === "") return;

    const matches = menuItems.filter(item =>
      item.name.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = "<li>No results found</li>";
    } else {
      matches.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.url;
        a.textContent = item.name;
        li.appendChild(a);
        searchResults.appendChild(li);
      });
    }
  });

  // Close search/cart on outside click
  document.addEventListener("click", (e) => {
    if (
      !e.target.closest(".nav-icons") &&
      !e.target.closest(".search-box") &&
      !e.target.closest(".cart-panel")
    ) {
      searchBox.style.display = "none";
      cartPanel.style.display = "none";
    }
  });

   AOS.init({
    duration: 1800,     // make it slower (1.8 seconds)
    easing: 'ease-in-out', // smooth easing
    once: false          // animation happens on every scroll
  });

  const counters = document.querySelectorAll('.count');
  let animated = false;

  function runCounters() {
    if (animated) return;
    const section = document.querySelector('.achievements-horizontal');
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-count');
          const count = +counter.innerText;
          const increment = Math.ceil(target / 100);

          if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target + (target >= 1000 ? '+' : '');
          }
        };
        updateCount();
      });
      animated = true;
    }
  }

  window.addEventListener('scroll', runCounters);


  // Mobile nav toggle
  const toggle = document.createElement('button');
  toggle.className = 'nav-toggle';
  toggle.innerHTML = '<i class="fas fa-bars"></i>';
  document.querySelector('.navbar').appendChild(toggle);

  const links = document.querySelector('.nav-links');
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    links.classList.remove('open');
    overlay.classList.remove('active');
  });

  