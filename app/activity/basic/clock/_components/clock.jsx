'use client'

import React, { useState, useEffect } from 'react'

export default function Clock() {
  const [time, setTime] = useState(new Date())

  console.log(`Clock render(渲染), time: ${time}`)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    console.log(`Clock mount(掛載), time: ${time}`)

    return () => {
      clearInterval(interval)
      console.log(`Clock unmount(卸載), time: ${time}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      title="Timer"
      style={{
        textAlign: 'center',
        border: '2px solid red',
        padding: '10px',
        height: '100px',
      }}
    >
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  )
}
