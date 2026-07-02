import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home/Home";
import Electronics from "./pages/Electronics/Electronics";
import Fashion from "./pages/Fashion/Fashion";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Orders from "./pages/Orders/Orders";
import ProductDetails from "./pages/Home/ProductDetails";
import Profile from "./pages/Profile/Profile";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;