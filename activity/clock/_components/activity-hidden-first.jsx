'use client'

import { useState, Activity } from 'react'
import dynamic from 'next/dynamic'
// 動態導入 Clock 元件，避免在伺服器端渲染造成不匹配時出現警告
// ssr: false 表示不使用伺服器端渲染
const Clock = dynamic(() => import('./clock'), { ssr: false })

export default function ActivityHiddenFirst() {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <h2>Activity元件(hide first)</h2>
      <hr />
      <button
        onClick={() => {
          const nextVisible = !visible

          console.log('visible: ', `${visible} --> ${nextVisible}`)

          setVisible(nextVisible)
        }}
      >
        {visible ? 'hide(隱藏)' : 'visible(顯示)'}
      </button>
      <hr />
      <Activity mode={visible ? 'visible' : 'hidden'}>
        <Clock />
      </Activity>
    </>
  )
}
