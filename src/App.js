import "./App.css";
import NavBar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={"/"} />
        <Route path="/category/:categoryId" element={"/"} />
        <Route path="products/:productId" element={"/"} />
        <Route path="/category/:category/products/:productId" element={"/"} />
        <Route path="*/products/:productId" element={"/"} />
        <Route path="/cart" element={"/"} />
        <Route path="/nosotros" element={"/"} />
        <Route path="*" element={"/"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
