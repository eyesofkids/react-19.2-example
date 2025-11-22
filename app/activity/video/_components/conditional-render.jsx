'use client'

import { useState } from 'react'

import VideoPlay from './content/video-play'
import TabButton from './ui/tab-button'
import Home from './content/home'

export default function ConditionalRender() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <>
      <h2>Conditional Render</h2>
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
      {activeTab === 'home' && <Home />}
      {activeTab === 'video' && <VideoPlay />}
    </>
  )
}
