'use client'

import { useState } from 'react'

import Sidebar from './sidebar'

export default function CssDemo() {
  const [isShowingSidebar, setIsShowingSidebar] = useState(true)

  return (
    <div id="root">
      <div style={{ display: isShowingSidebar ? 'block' : 'none' }}>
        <Sidebar />
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
