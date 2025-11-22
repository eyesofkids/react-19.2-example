'use client'

import { useState } from 'react'
import PostsFetch from './posts-fetch'

export default function CssDisplayHiding() {
  const [show, setShow] = useState(true)
  return (
    <>
      <h2>CSS display hiding</h2>
      <hr />
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide(隱藏)' : 'Show(顯示)'}
      </button>
      <div style={{ display: show ? 'block' : 'none' }}>
        <PostsFetch />
      </div>
    </>
  )
}
