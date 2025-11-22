'use client'

import { useState } from 'react'

// import ProductSearch from './product-search'
// import { Suspense } from 'react'
import Chat from './chat'

export default function Sidebar() {
  // const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <nav>
        <Chat />
      </nav>
    </>
  )
}
