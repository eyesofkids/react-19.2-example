'use client'

import { useState } from 'react'

import ProductSearch from './product-search'
import { Suspense } from 'react'

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <nav>
        <Suspense fallback={<h3>🌀 載入中...</h3>}>
          <button onClick={() => setIsExpanded(!isExpanded)}>
            Overview
            <span className={`indicator ${isExpanded ? 'down' : 'right'}`}>
              &#9650;
            </span>
          </button>

          {isExpanded && (
            <ul>
              <li>Section 1</li>
              <li>Section 2</li>
              <li>Section 3</li>
            </ul>
          )}
          <hr />
          <ProductSearch />
        </Suspense>
      </nav>
    </>
  )
}
