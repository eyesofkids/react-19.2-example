'use client'

import { useState, useEffect, useEffectEvent } from 'react'

export default function Home({ count = 0 }) {
  console.log('Home: render(渲染)')
  const [count2, setCount2] = useState(0)

  const handleCountIncrement = useEffectEvent(() => {
    setCount2(count * 2)
  })

  useEffect(() => {
    handleCountIncrement()
  }, [count])

  return (
    <>
      <div>Home</div>
      <div>count2(=count*2) = {count2}</div>
    </>
  )
}
