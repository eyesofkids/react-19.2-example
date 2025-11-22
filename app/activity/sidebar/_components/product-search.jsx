'use client'

import { useState, useEffect, useRef } from 'react'
import productsData from '../_data/products.json'

// debounce function to set the search value
function useDebounce(cb, delay) {
  const timeoutId = useRef()

  return function (...args) {
    if (timeoutId.current) {
      // This check is not strictly necessary
      clearTimeout(timeoutId.current)
    }
    timeoutId.current = setTimeout(() => cb(...args), delay)
  }
}

export default function ProductSearch() {
  const [inputValue, setInputValue] = useState('')
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const lastSearchRef = useRef('')
  const firstRenderRef = useRef(true)

  // get products by search
  async function getProductsBySearch(search) {
    console.log('getProductsBySearch: ', search)
    // Add a fake delay to make waiting noticeable.
    await new Promise((resolve) => {
      setTimeout(resolve, 3000)
    })

    return productsData.filter(
      (product) =>
        product.name.includes(search) ||
        product.description.includes(search) ||
        product.category.includes(search)
    )
  }

  // debounce function to set the search value
  const debouncedChange = useDebounce((inputValue) => {
    console.log('Debounced:', inputValue)
    setSearch(inputValue)
  }, 1000)

  // handle change event
  const handleChange = (e) => {
    // set the input value
    setInputValue(e.target.value)
    // call the debounced function to set the search value
    debouncedChange(e.target.value)
  }

  // 追踪元件掛載狀態
  useEffect(() => {
    if (search === '') {
      firstRenderRef.current = true
    }
  }, [])

  useEffect(() => {
    console.log('firstRenderRef.current: ', firstRenderRef.current)
    console.log('Effect: search value is changed: ', search)

    const handleSearch = async (term = '') => {
      setIsLoading(true)
      const products = await getProductsBySearch(term)
      setProducts(products)
      setIsLoading(false)
    }

    // do the first search only once
    if (firstRenderRef.current && products.length === 0) {
      handleSearch()
      firstRenderRef.current = false
      return
    }

    // do search if the search is different from the last search
    if (lastSearchRef.current !== search) {
      console.log('message: do search')
      lastSearchRef.current = search
      handleSearch(search)
    } else {
      console.log('message: do not search')
    }
  }, [search, products])

  return (
    <>
      <input
        type="text"
        placeholder="Search products"
        value={inputValue}
        // disable the input if the search is loading
        // because search is slow for demo purpose, if repeat input the search word will trigger multiple searches
        disabled={isLoading}
        onChange={handleChange}
      />
      {isLoading ? (
        <h3>🌀 載入中...</h3>
      ) : products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Category: {product.category}</p>
              <p>Price: {product.price}</p>
              <p>Stock: {product.stock}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>沒有找到匹配的產品</h3>
      )}
    </>
  )
}
