import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const imagesPerPage = 4

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error('Error fetching products:', err))
  }, [])

  const totalPages = Math.ceil(products.length / imagesPerPage)
  const startIndex = currentPage * imagesPerPage
  const endIndex = startIndex + imagesPerPage
  const currentImages = products.slice(startIndex, endIndex)

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="app">
      <h1>Product Images</h1>
      <div className="images-container">
        {currentImages.map(product => (
          <img key={product.id} src={product.thumbnail} alt={product.title} />
        ))}
      </div>
      <div className="buttons">
        <button onClick={prevPage} disabled={currentPage === 0}>Previous</button>
        <button onClick={nextPage} disabled={currentPage === totalPages - 1}>Next</button>
      </div>
    </div>
  )
}

export default App