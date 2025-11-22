// from: https://react.dev/reference/react/Activity
'use client'

import { useEffect, useRef } from 'react'

export default function VideoPlayWithProps({ show }) {
  console.log('Video: render(渲染)')

  const videoRef = useRef(null)

  useEffect(() => {
    console.log(
      'Video: useEffect mount(掛載) or show prop changed(顯示狀態改變)'
    )
    if (!show) {
      videoRef.current.pause()
    }
  }, [show])

  return (
    <div>
      <video
        // 'Big Buck Bunny' licensed under CC 3.0 by the Blender foundation. Hosted by archive.org
        ref={videoRef}
        controls
        playsInline
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        style={{ width: '300px', marginTop: '10px', aspectRatio: '16/9' }}
      >
        <track kind="captions" srcLang="en" label="English" />
      </video>
    </div>
  )
}
