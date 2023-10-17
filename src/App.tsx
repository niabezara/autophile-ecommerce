import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import NavBar from "./components/NavBar";
import { Helmet } from "react-helmet";
import Dashboard from "./routes/Dashboard";
import { useState } from "react";
import Headphones from "./routes/Headphones";
import Speakers from "./routes/Speakers";
import Earphones from "./routes/Earphones";
import Footer from "./components/Footer";
import Product from "./routes/Product";
import { CartProvider } from "./context/CartContext";
import CheckOut from "./routes/CheckOut";

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <div style={{ overflowY: "auto", maxHeight: "100vh" }}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <CartProvider>
        <NavBar
          isNavbarOpen={isNavbarOpen}
          setIsNavbarOpen={setIsNavbarOpen}
          toggleNavbar={toggleNavbar}
        />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Headphones" element={<Headphones />} />
          <Route path="/Speakers" element={<Speakers />} />
          <Route path="/Earphones" element={<Earphones />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
