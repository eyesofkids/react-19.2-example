'use client'

import React, { useState, useEffect } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  console.log(`Counter render(渲染), count: ${count}`)

  useEffect(() => {
    console.log(`Counter mount(掛載), count: ${count}`)
    return () => {
      console.log(`Counter unmount(卸載), count: ${count}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      title="Counter"
      style={{ textAlign: 'center', border: '2px solid red', padding: '10px' }}
    >
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  )
}
