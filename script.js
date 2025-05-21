<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Kanchan Chemicals - Herbal Gulal Manufacturer</title>
  <link rel="stylesheet" href="style.css" />
  <script src="script.js" defer></script>
</head>
<body>
  <!-- Header Section with Logo and Navbar -->
  <header>
    <div class="nav-container">
      <a href="index.html">
        <img src="kanchan-logo.png" alt="Kanchan Chemicals Logo" class="logo" />
      </a>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Home Section with Highlights -->
  <section id="home">
    <div class="container">
      <h1>Welcome to Kanchan Chemicals</h1>
      <p>We manufacture herbal holi gulal, rangoli colors, roli chawal tilak, stationary glue, craft glue, tile adhesive etc.</p>

      <!-- Instagram-Style Highlights -->
      <div class="insta-highlights">
        <div class="highlight-circle">
          <img src="images/gulal.jpg" alt="Herbal Gulal">
          <p>Herbal Gulal</p>
        </div>
        <div class="highlight-circle">
          <img src="images/rangoli.jpg" alt="Rangoli">
          <p>Rangoli</p>
        </div>
        <div class="highlight-circle">
          <img src="images/glue.jpg" alt="Glue">
          <p>Glue</p>
        </div>
        <div class="highlight-circle">
          <img src="images/pooja.jpg" alt="Pooja Items">
          <p>Roli-Haldi</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Products Section -->
  <section id="products">
    <h2>Our Products</h2>
    <div class="product-list">
      <div class="product-item">
        <img src="images/product1.jpg" alt="Herbal Holi Gulal">
        <h3>Herbal Holi Gulal</h3>
        <p>Natural and skin-safe gulal for a safe and colorful Holi celebration.</p>
      </div>
      <div class="product-item">
        <img src="images/product2.jpg" alt="Rangoli Colors">
        <h3>Rangoli Colors</h3>
        <p>Bright and beautiful colors perfect for traditional art and decoration.</p>
      </div>
      <div class="product-item">
        <img src="images/product3.jpg" alt="Roli Chawal Tilak">
        <h3>Roli Chawal Tilak</h3>
        <p>Pure roli and chawal for religious rituals and festivals.</p>
      </div>
      <div class="product-item">
        <img src="images/product4.jpg" alt="Stationary Glue">
        <h3>Stationary Glue</h3>
        <p>Strong and quick-drying glue for office and school use.</p>
      </div>
      <div class="product-item">
        <img src="images/product5.jpg" alt="Craft Glue">
        <h3>Craft Glue</h3>
        <p>Perfect for DIY projects, crafts, and hobbies.</p>
      </div>
      <div class="product-item">
        <img src="images/product6.jpg" alt="Tile Adhesive">
        <h3>Tile Adhesive</h3>
        <p>Durable adhesive for tiles, ideal for home improvement projects.</p>
      </div>
    </div>
  </section>

  <!-- About Us Section -->
  <section id="about">
    <h2>About Us</h2>
    <p>
      Kanchan Chemicals is a trusted manufacturer of herbal holi gulal, rangoli colors,
      roli chawal tilak, stationary glue, craft glue, tile adhesive and more. Our commitment to quality and
      tradition ensures that every product brings color and festivity into your life.
    </p>
    <img src="images/about-us.jpg" alt="About Kanchan Chemicals">
    <video src="videos/about.mp4" controls></video>
  </section>

  <!-- Footer Section -->
  <footer id="contact">
    <p>&copy; 2025 Kanchan Chemicals. All rights reserved.</p>
    <div class="footer-contact">
      <p>Contact: +91 7014967994 | Email: kanchanchemicals15@gmail.com | Location: Jaipur, Rajasthan</p>
    </div>
  </footer>
</body>
</html>
// Scroll Animation
document.addEventListener("DOMContentLoaded", () => {
  const productItems = document.querySelectorAll(".product-item");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  productItems.forEach(item => {
    observer.observe(item);
  });
});
