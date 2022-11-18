import './App.css';
import Navigation from "./components/Navigation";
import ProductsList from "./components/ProductsList";
import {useEffect, useState} from "react";
import {fetchProducts} from "./client/products";
import Cart from "./components/Cart";

function App() {
  const [products, updateProducts] = useState([])

  useEffect(() => {
    updateProducts(fetchProducts())
  }, [])

  return (
    <>
      <Navigation></Navigation>
      <ProductsList products={products}></ProductsList>
      <Cart></Cart>
    </>
  );
}

export default App;
