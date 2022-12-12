import './App.css';
import Navigation from "./components/Navigation";
import ProductsList from "./components/ProductsList";
import {useEffect, useState} from "react";
import {fetchProducts} from "./client/products";

function App() {
  const [products, updateProducts] = useState([])

  useEffect(() => {
    async function loadProducts() {
      const products = await fetchProducts()
      updateProducts(products)
    }
    loadProducts()
  }, [])

  return (
    <>
      <Navigation></Navigation>
      <ProductsList products={products}></ProductsList>
    </>
  );
}

export default App;
