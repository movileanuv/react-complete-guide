export async function fetchProducts() {
  const url = "https://food-order-app-24161-default-rtdb.europe-west1.firebasedatabase.app/products.json",
    response = await fetch(url),
    data = await response.json()
  return Object.values(data)
}
