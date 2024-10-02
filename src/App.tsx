import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import ProductsPage from "./pages/products";
import NotFound from "./pages/notFound";
import Contacts from "./pages/contacts";



function App() {
  return (
    <>
      <Router>
        <nav className=" w-full">
          <Navbar />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<Contacts/> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
