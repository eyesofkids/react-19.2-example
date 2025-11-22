'use client'

import React, { useState, useEffect } from 'react'

export default function Clock({ data }) {
  const [time, setTime] = useState(new Date())
  // counter with parent props
  const [count, setCount] = useState(0)

  console.log(
    `Clock render(渲染), data: ${data}, count: ${count}, time: ${time}`
  )

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

  useEffect(() => {
    console.log('Clock: mount(掛載), count: ', count)
    // sync count with parent props
    setCount(data)
    return () => {
      console.log('Clock: unmount(卸載), count: ', count)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <div
      title="Timer"
      style={{
        textAlign: 'center',
        border: '2px solid red',
        padding: '10px',
        height: '150px',
      }}
    >
      <h2>{time.toLocaleTimeString()}</h2>
      <div>count: {count}</div>
      <div>data: {data}</div>
    </div>
  )
}
