'use client'

import { useState } from 'react'
import VideoPlay from './content/video-play'
import TabButton from './ui/tab-button'
import Home from './content/home'

export default function CssDisplayHiding() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <>
      <h2>CSS display hiding</h2>
      <hr />
      <hr />
      <TabButton
        isActive={activeTab === 'home'}
        onClick={() => setActiveTab('home')}
      >
        Home
      </TabButton>
      <TabButton
        isActive={activeTab === 'video'}
        onClick={() => setActiveTab('video')}
      >
        Video
      </TabButton>
      <hr />
      <div style={{ display: activeTab === 'home' ? 'block' : 'none' }}>
        <Home />
      </div>
      <div style={{ display: activeTab === 'video' ? 'block' : 'none' }}>
        <VideoPlay />
      </div>
    </>
  )
}
