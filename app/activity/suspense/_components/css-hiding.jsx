'use client'

import { useState, Activity, Suspense } from 'react'
import TabButton from './ui/tab-button'
import Home from './content/home'
import Posts from './content/posts'
import Products from './content/products'

export default function CssHiding() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <>
      <h2>CSS hiding</h2>
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
      <div style={{ display: activeTab === 'home' ? 'block' : 'none' }}>
        <Home />
      </div>
      <div style={{ display: activeTab === 'posts' ? 'block' : 'none' }}>
        <Posts />
      </div>
      <div style={{ display: activeTab === 'products' ? 'block' : 'none' }}>
        <Products />
      </div>
    </>
  )
}
