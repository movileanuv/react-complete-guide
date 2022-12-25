async function placeOrder(data) {
  const url = "https://food-order-app-24161-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
    response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })

  return response.ok
}

export default placeOrder
