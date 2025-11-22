'use client'

import { useState } from 'react'
import ActivityHiddenFirst from './_components/activity-hidden-first'
import ActivityVisibleFirst from './_components/activity-visible-first'

export default function InteractiveClockPage() {
  const [forceUpdate, setForceUpdate] = useState(true)

  return (
    <>
      <h1>Activity 互動式範例(時鐘)</h1>
      <button onClick={() => setForceUpdate(!forceUpdate)}>force update</button>
      <hr />
      {/* <ActivityHiddenFirst /> */}
      <hr />
      <ActivityVisibleFirst />
    </>
  )
}
