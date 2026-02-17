import { useEffect, useState } from 'react';
import './App.css';

const products = [
  {
    id: 1,
    name: 'Tailored Wool Blazer',
    price: '$450.00',
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1594932224010-74f43a18354c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 2,
    name: 'Silk Evening Gown',
    price: '$890.00',
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1539109132332-629ee62016ce?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 3,
    name: 'Signature Leather Tote',
    price: '$320.00',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1548036654-3d944484d03e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 4,
    name: 'Cashmere Turtleneck',
    price: '$280.00',
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&q=80&w=1000'
  }
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="brand-logo">VOGUE & VEIL</div>
          <div className="nav-links">
            <a href="#shop">Shop</a>
            <a href="#collections">Collections</a>
            <a href="#about">About</a>
          </div>
          <div className="nav-icons">
            <button aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <button aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <div className="hero-content" data-reveal>
            <h1>Defining Modern Elegance.</h1>
            <p>Experience the intersection of tradition and contemporary style. Our spring 2026 collection is now available.</p>
            <a href="#shop" className="btn">Explore Collection</a>
          </div>
        </div>
        <div className="hero-image"></div>
      </header>

      <section className="categories container">
        <div className="cat-item" data-reveal>
          <img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=1000" alt="Men's Collection" />
          <div className="cat-overlay">
            <h3>Men</h3>
          </div>
        </div>
        <div className="cat-item" data-reveal>
          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000" alt="Women's Collection" />
          <div className="cat-overlay">
            <h3>Women</h3>
          </div>
        </div>
        <div className="cat-item" data-reveal>
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000" alt="Accessories" />
          <div className="cat-overlay">
            <h3>Accessories</h3>
          </div>
        </div>
      </section>

      <main id="shop" className="featured container">
        <div className="section-head" data-reveal>
          <h2>Featured Arrivals</h2>
          <p>Handpicked selections for the refined lifestyle.</p>
        </div>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card" data-reveal>
              <div className="product-img-wrapper">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <div>
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
                </div>
                <button className="add-to-cart">+</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="brand-logo" style={{ marginBottom: '1.5rem' }}>VOGUE & VEIL</div>
              <p style={{ opacity: 0.7 }}>Premium quality clothing for the modern individual.</p>
            </div>
            <div className="footer-col">
              <h4>Shop</h4>
              <ul>
                <li>New Arrivals</li>
                <li>Best Sellers</li>
                <li>Collections</li>
                <li>Sustainability</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Assistance</h4>
              <ul>
                <li>Shipping Policy</li>
                <li>Returns & Exchanges</li>
                <li>Size Guide</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Newsletter</h4>
              <p style={{ opacity: 0.7, marginBottom: '1rem' }}>Join our inner circle for exclusive updates.</p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input type="text" placeholder="Email Address" style={{ padding: '0.8rem', flex: 1, background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }} />
                <button className="btn" style={{ padding: '0.8rem 1.5rem' }}>Join</button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 VOGUE & VEIL. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
