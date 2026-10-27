import { Navbar } from "./components/Navbar"
import { CartProvider } from "./context/CartProvider"
import { BrowserRouter, Routes, Route } from "react-router"
import { Catalog } from "./components/Catalog"
import { Cart } from "./components/Cart"
import { AddItem } from "./components/AddItem"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add" element={<AddItem />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
