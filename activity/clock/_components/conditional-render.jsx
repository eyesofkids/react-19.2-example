'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
// 動態導入 Clock 元件，避免在伺服器端渲染造成不匹配時出現警告
// ssr: false 表示不使用伺服器端渲染
const Clock = dynamic(() => import('./clock'), { ssr: false })

export default function ConditionalRender() {
  const [show, setShow] = useState(true)

  return (
    <>
      <h2>Conditional Rendering(條件式渲染)</h2>
      <hr />
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide(隱藏)' : 'Show(顯示)'}
      </button>
      {show && <Clock />}
    </>
  )
}
