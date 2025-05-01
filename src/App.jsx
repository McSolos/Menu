import { useState, useEffect } from 'react';
import menuImage from './assets/WhatsApp Image 2025-04-30 at 21.41.29_05b5be13.jpg';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading Menu...</h1>
      </div>
    );
  }

  return (
    <div className="menu-container">
      <header>
        <h1>Our Menu</h1>
        <p>Take-out Cafe </p>
      </header>

      <main>
        <div className="menu-image-container">
          <img 
            src={menuImage} 
            alt="Restaurant Menu" 
            className="menu-image"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://via.placeholder.com/800x1000?text=Menu+Image+Not+Found";
            }}
          />
        </div>
      </main>

      <footer>
        {/* <p>123 Main Street • Open 11am-10pm Daily • (555) 123-4567</p> */}
      </footer>
    </div>
  );
}

export default App;