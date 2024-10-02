/* Utilizando o fetch com then.
fetch("http://localhost:3333/products")
.then((response) => response.json())
.then((data) => console.log(data)) 
*/

// Utilizando o fetch com async/await.
async function fetchProducts() {
  const response = await fetch("http://localhost:3333/products")
  const data = await response.json()
  console.log(data)
}

async function fetchProductById(id) {
  const response = await fetch(`http://localhost:3333/products/${id}`)
  const data = await response.json()
  console.log(data)
}

fetchProductById(3)
//fetchProducts()