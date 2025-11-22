'use client'

import ActivityDemo from './_components/activity-demo'
import CssDemo from './_components/css-demo'
import './page.css'
import { Profiler } from 'react'

export default function SidebarPrerenderPage() {
  return (
    <>
      {/* <ActivityDemo /> */}
      <CssDemo />
    </>
  )
}
