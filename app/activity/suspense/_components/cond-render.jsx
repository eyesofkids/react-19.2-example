'use client'

import { useState, Activity, Suspense } from 'react'
import TabButton from './ui/tab-button'
import Home from './content/home'
import Posts from './content/posts'
import Products from './content/products'

export default function CondRender() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <>
      <h2>Cond. Render</h2>
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
      {activeTab === 'home' && <Home />}
      {activeTab === 'posts' && <Posts />}
      {activeTab === 'products' && <Products />}
    </>
  )
}
