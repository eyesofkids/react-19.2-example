'use client'

import { useState, Activity, Suspense, Profiler } from 'react'
import TabButton from './ui/tab-button'
import Home from './content/home'
import Posts from './content/posts'
import DataDisplay from './content/data-display'

// Profiler可以幫助分析元件的渲染效能，並提供性能指標
function onRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  // 聚合或記錄渲染時間...
  console.table({
    Component: id,
    Phase: phase,
    StartTime: `${startTime.toFixed(2)}ms`,
    CommitTime: `${commitTime.toFixed(2)}ms`,
    ActualTime: `${actualDuration.toFixed(2)}ms`,
    BaseTime: `${baseDuration.toFixed(2)}ms`,
    Wasted: `${(baseDuration - actualDuration).toFixed(2)}ms`,
  })
}

export default function ActivitySuspense({ data = [] }) {
  const [activeTab, setActiveTab] = useState('home')
  const [count, setCount] = useState(0)

  return (
    <>
      <Profiler id="performance-tracks-demo" onRender={onRender}>
        <h1>Performance Tracks範例</h1>
        <button
          onClick={() => {
            setCount(count + 1)
          }}
        >
          Count = {count}
        </button>
        <hr />
        <TabButton
          isActive={activeTab === 'home'}
          onClick={() => setActiveTab('home')}
        >
          Home
        </TabButton>
        <TabButton
          isActive={activeTab === 'posts'}
          onClick={() => setActiveTab('posts')}
        >
          Posts
        </TabButton>
        <TabButton
          isActive={activeTab === 'readfile'}
          onClick={() => setActiveTab('readfile')}
        >
          Readfile
        </TabButton>
        <hr />
        {/* ⚠️ 每個 Activity 元件都有自己的 Suspense 邊界(loading 狀態是獨立的) */}
        <Activity mode={activeTab === 'home' ? 'visible' : 'hidden'}>
          <Home count={count} />
        </Activity>

        <Activity mode={activeTab === 'posts' ? 'visible' : 'hidden'}>
          <Suspense fallback={<h1>🌀 Loading Posts...</h1>}>
            <Posts />
          </Suspense>
        </Activity>

        <Activity mode={activeTab === 'readfile' ? 'visible' : 'hidden'}>
          <DataDisplay data={data} />
        </Activity>
      </Profiler>
    </>
  )
}
