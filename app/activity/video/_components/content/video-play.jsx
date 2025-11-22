// from: https://react.dev/reference/react/Activity
'use client'

import { useRef, useLayoutEffect } from 'react'

export default function VideoPlay() {
  console.log('Video: render(渲染)')

  const ref = useRef()

  // We call useLayoutEffect instead of useEffect because conceptually the clean-up code is tied to the component’s UI being visually hidden. If we used a regular effect, the code could be delayed by (say) a re-suspending Suspense boundary or a View Transition.
  useLayoutEffect(() => {
    console.log('Video: useLayoutEffect mount(掛載)')
    const videoRef = ref.current

    return () => {
      videoRef.pause()
      console.log('Video: useLayoutEffect unmount(卸載)')
    }
  }, [])

  return (
    <div>
      <video
        // 'Big Buck Bunny' licensed under CC 3.0 by the Blender foundation. Hosted by archive.org
        ref={ref}
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
