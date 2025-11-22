'use client'

import { useState, useRef } from 'react'
import { use } from 'react'
import { fetchData } from '../_data'
import { useEffect } from 'react'

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
  console.log('Products: render(渲染)')
  // get products data
  const products = use(fetchData('/products'))

  const [inputValue, setInputValue] = useState('')
  const [search, setSearch] = useState('')

  // get products by search
  const getProductsBySearch = (search) => {
    console.log('getProductsBySearch: ', search)
    return products.filter(
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

  useEffect(() => {
    console.log('useEffect: component is mounted')
    return () => {
      console.log('useEffect: component is unmounted')
    }
  }, [])

  return (
    <>
      <input
        type="text"
        placeholder="Search products"
        value={inputValue}
        onChange={handleChange}
      />
      {getProductsBySearch(search).length > 0 ? (
        <ul>
          {getProductsBySearch(search).map((product) => (
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
