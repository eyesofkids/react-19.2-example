'use client'

import { useState, Activity } from 'react'
import OnlyText from './_components/only-text'
import DivText from './_components/div-text'

export default function BasicTextPage() {
  const [showOnlyText, setShowOnlyText] = useState(true)
  const [showDivText, setShowDivText] = useState(true)

  return (
    <>
      <h1>Activity 基本範例(文字)</h1>
      <hr />
      <h2>OnlyText</h2>
      <button onClick={() => setShowOnlyText(!showOnlyText)}>
        {showOnlyText ? 'Hide(隱藏)' : 'Show(顯示)'}
      </button>
      <Activity mode={showOnlyText ? 'visible' : 'hidden'}>
        <OnlyText />
      </Activity>
      <hr />
      <h2>DivText</h2>
      <button onClick={() => setShowDivText(!showDivText)}>
        {showDivText ? 'Hide(隱藏)' : 'Show(顯示)'}
      </button>
      <Activity mode={showDivText ? 'visible' : 'hidden'}>
        <DivText />
      </Activity>
    </>
  )
}
