import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./UI/navbar";
import Home from "./pages/home";
import ProductsPage from "./pages/products";


function NotFound() {
  return <h1 >404 - Not Found</h1>;
}

function App() {
  return (
    <>
      <Router>
        <nav className=" w-full">
         
          <Navbar/>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
