'use client'

import { useState, Activity } from 'react'
import VideoPlay from './content/video-play'
import TabButton from './ui/tab-button'
import Home from './content/home'

export default function ActivityHiddenFirst() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <>
      <h2>Activity</h2>
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
      <Activity mode={activeTab === 'home' ? 'visible' : 'hidden'}>
        <Home />
      </Activity>
      <Activity mode={activeTab === 'video' ? 'visible' : 'hidden'}>
        <VideoPlay />
      </Activity>
    </>
  )
}
