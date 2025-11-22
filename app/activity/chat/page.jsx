'use client'

import ActivityDemo from './_components/activity-demo'
import CssDemo from './_components/css-demo'
import './page.css'
import { Profiler } from 'react'

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
export default function SidebarPrerenderPage() {
  return (
    <>
      {/* <Profiler id="sidebar-prerender" onRender={onRender}> */}
      <ActivityDemo />
      {/* <CssDemo /> */}
      {/* </Profiler> */}
    </>
  )
}
