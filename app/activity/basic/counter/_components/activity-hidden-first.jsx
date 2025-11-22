'use client'

import { useState, Activity } from 'react'
import Counter from './counter'

export default function ActivityHiddenFirst() {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <h2>Activity元件(hidden first)</h2>
      <hr />
      <button
        onClick={() => {
          const nextVisible = !visible

          console.log('visible: ', `${visible} --> ${nextVisible}`)

          setVisible(nextVisible)
        }}
      >
        {visible ? 'visible(顯示)' : 'hide(隱藏)'}
      </button>
      <hr />
      <Activity mode={visible ? 'visible' : 'hidden'}>
        <Counter />
      </Activity>
    </>
  )
}
