import { Route, Routes, useNavigate } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/plants");
  };

  return (
    <main className="landing-page">
      <div className="landing-overlay">
        <section className="landing-content">
          <div className="landing-introduction">
            <p className="small-heading">BRING NATURE HOME</p>

            <h1>Paradise Nursery</h1>

            <p className="landing-description">
              Discover beautiful plants that bring freshness, peace, and life
              into your home.
            </p>

            <button
              type="button"
              className="get-started-button"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          </div>

          <AboutUs />
        </section>
      </div>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;