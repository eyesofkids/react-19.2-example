'use client'

import { useState, Activity, Suspense } from 'react'
import TabButton from './ui/tab-button'
import Home from './content/home'
import Posts from './content/posts'
import Products from './content/products'

export default function AloneFallback() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <>
      <h2>Alone Fallback</h2>
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
        isActive={activeTab === 'products'}
        onClick={() => setActiveTab('products')}
      >
        Products
      </TabButton>

      <hr />
      {/* ⚠️ each Activity components has its own Suspense boundary(loading state is independent) */}
      <Activity mode={activeTab === 'home' ? 'visible' : 'hidden'}>
        <Home />
      </Activity>

      <Activity mode={activeTab === 'posts' ? 'visible' : 'hidden'}>
        <Suspense fallback={<h1>🌀 Loading Posts...</h1>}>
          <Posts />
        </Suspense>
      </Activity>

      <Activity mode={activeTab === 'products' ? 'visible' : 'hidden'}>
        <Suspense fallback={<h1>🌀 Loading Products...</h1>}>
          <Products />
        </Suspense>
      </Activity>
    </>
  )
}
