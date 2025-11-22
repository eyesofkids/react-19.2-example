'use client'

import { useState } from 'react'
import Counter from './counter'

export default function ConditionalRender() {
  const [show, setShow] = useState(true)

  return (
    <>
      <h2>Conditional Rendering(條件式渲染)</h2>
      <hr />
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide(隱藏)' : 'Show(顯示)'}
      </button>
      {show && <Counter />}
    </>
  )
}
