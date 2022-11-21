import ProductItem from "./ProductItem";

function ProductsList(props) {
  return <>
    <h1>Products</h1>
    <ul>
      {props.products.map((el, idx) => {
        return <ProductItem item={el} key={idx}></ProductItem>
      })}
    </ul>
  </>
}

export default ProductsList