'use client'

import { useState, Activity, Suspense } from 'react'
import TabButton from './ui/tab-button'
import Home from './content/home'
import Posts from './content/posts'
import Products from './content/products'

export default function SharedFallback() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <>
      <h2>Shared Fallback</h2>
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
      {/* ⚠️ all Activity components are shared within the same Suspense boundary(loading state is shared) */}
      <Suspense fallback={<h1>🌀 Loading...</h1>}>
        <Activity mode={activeTab === 'home' ? 'visible' : 'hidden'}>
          <Home />
        </Activity>
        <Activity mode={activeTab === 'posts' ? 'visible' : 'hidden'}>
          <Posts />
        </Activity>
        <Activity mode={activeTab === 'products' ? 'visible' : 'hidden'}>
          <Products />
        </Activity>
      </Suspense>
    </>
  )
}
