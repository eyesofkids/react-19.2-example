'use client'

import { useState } from 'react'
import VideoPlayWithProps from './content/video-play-w-props'
import TabButton from './ui/tab-button'
import Home from './content/home'

export default function CssDisplayHidingWithRefs() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <>
      <h2>CSS display hiding(with props)</h2>
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
        <VideoPlayWithProps show={activeTab === 'video'} />
      </div>
    </>
  )
}
