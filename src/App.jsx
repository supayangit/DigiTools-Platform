import { useEffect as useProducts, useState, useEffect as usePricings, Suspense } from "react";
import './App.css'
import Navbar from './components/navbar/navbar'
import Banner from './components/banner/banner'
import Stats from './components/stats/stats'
import Home from './components/home/home'
import Steps from './components/steps/steps'
import Ready from './components/ready/ready'
import Pricing from './components/pricing/pricing'
import Footer from './components/footer'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [products, setProducts] = useState([]);
  const [pricings, setPricings] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useProducts(() => {
    const fetchProducts = async () => {
      const res = await fetch("/products.json");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  usePricings(() => {
    const fetchPricings = async () => {
      const res = await fetch("/pricing.json");
      const data = await res.json();
      setPricings(data);
    };

    fetchPricings();
  }, []);

  return (
    <>
      <header>
        <Navbar cartCount={cartCount} setCartCount={setCartCount} />
      </header>

      <section>
        <Banner />
      </section>

      <section>
        <Stats />
      </section>

      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <Home products={products} cartCount={cartCount} setCartCount={setCartCount} />
      </Suspense>

      <section>
        <Steps></Steps>
      </section>

      <section>
        <Ready></Ready>
      </section>

      <section>
        <Pricing pricings={pricings}></Pricing>
      </section>

      <section>
        <Footer></Footer>
      </section>

      {/* toast pop up container */}
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;