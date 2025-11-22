'use client'

import { useState, Suspense } from 'react'

import Sidebar from './sidebar'

export default function CssDemo() {
  const [isShowingSidebar, setIsShowingSidebar] = useState(false)

  return (
    <div id="root">
      <div style={{ display: isShowingSidebar ? 'block' : 'none' }}>
        <Suspense fallback={<h3>🌀 載入中...</h3>}>
          <Sidebar />
        </Suspense>
      </div>

      <main style={{ marginLeft: isShowingSidebar ? '280px' : '0' }}>
        <button onClick={() => setIsShowingSidebar(!isShowingSidebar)}>
          Toggle sidebar
        </button>
        <h1>CSS:Main content</h1>
      </main>
    </div>
  )
}
