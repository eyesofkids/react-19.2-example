'use client'

import { useState, Activity, Suspense } from 'react'
import TabButton from './ui/tab-button'
import Home from './content/home'
import Posts from './content/posts'
import Products from './content/products'

export default function OnlyActivity() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <>
      <h2>Only Activity</h2>
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
      {/* only Activity components are used, no Suspense boundary */}
      <Activity mode={activeTab === 'home' ? 'visible' : 'hidden'}>
        <Home />
      </Activity>
      <Activity mode={activeTab === 'posts' ? 'visible' : 'hidden'}>
        <Posts />
      </Activity>
      <Activity mode={activeTab === 'products' ? 'visible' : 'hidden'}>
        <Products />
      </Activity>
    </>
  )
}
