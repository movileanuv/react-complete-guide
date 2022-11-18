function ProductsList(props) {
  return <>
    <h1>Products</h1>
    <ul>
      {props.products.map((el, idx) => {
        return <li key={idx}><b>{el.name}</b>: {el.price}€</li>
      })}
    </ul>
  </>
}

export default ProductsList