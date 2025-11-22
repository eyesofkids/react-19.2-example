import { use } from 'react'
import { fetchData } from '../../_data'

export default function Products() {
  console.log('Products: render(渲染)')
  const products = use(fetchData('/products'))

  return (
    <ul className="items">
      {products.map((product) => (
        <li className="item" key={product.id}>
          {product.name}
        </li>
      ))}
    </ul>
  )
}
