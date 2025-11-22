'use client'

import { Activity, useState } from 'react'

import Sidebar from './sidebar'

export default function ActivityDemo() {
  const [isShowingSidebar, setIsShowingSidebar] = useState(true)

  return (
    <div id="root">
      <Activity mode={isShowingSidebar ? 'visible' : 'hidden'}>
        <Sidebar />
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
