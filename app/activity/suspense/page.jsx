'use client'

import { Profiler } from 'react'
import SharedFallback from './_components/shared-fallback'
import AloneFallback from './_components/alone-fallback'
import OnlyActivity from './_components/only-activity'
import CssHiding from './_components/css-hiding'
import CondRender from './_components/cond-render'

function onRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  // Aggregate or log render timings...
  console.table({
    Component: id,
    Phase: phase,
    ActualTime: `${actualDuration.toFixed(2)}ms`,
    BaseTime: `${baseDuration.toFixed(2)}ms`,
    Wasted: `${(baseDuration - actualDuration).toFixed(2)}ms`,
  })
}

export default function AInSPage() {
  return (
    <Profiler id="sidebar-prerender" onRender={onRender}>
      <h1>Activity in Suspense</h1>
      <hr />
      <SharedFallback />
      <hr />
      {/* <AloneFallback /> */}
      <hr />
      {/* <OnlyActivity /> */}
      <hr />
      {/* <CondRender /> */}
      <hr />
      {/* <CssHiding /> */}
    </Profiler>
  )
}
