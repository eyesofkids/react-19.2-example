'use client'

import { Activity, useState, Suspense } from 'react'

import Sidebar from './sidebar'

export default function ActivityDemo() {
  const [isShowingSidebar, setIsShowingSidebar] = useState(false)

  return (
    <div id="root">
      <Activity mode={isShowingSidebar ? 'visible' : 'hidden'}>
        <Suspense fallback={<h3>🌀 載入中...</h3>}>
          <Sidebar />
        </Suspense>
      </Activity>

      <main style={{ marginLeft: isShowingSidebar ? '280px' : '0' }}>
        <button onClick={() => setIsShowingSidebar(!isShowingSidebar)}>
          Toggle sidebar
        </button>
        <h1>Activity: Main content</h1>
      </main>
    </div>
  )
}
