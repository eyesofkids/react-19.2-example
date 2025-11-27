'use client'

import CssDisplayHiding from './_components/css-display-hiding'
import CssDisplayHidingWithProps from './_components/css-display-hiding-w-props'
import Activity from './_components/activity'
import ConditionalRender from './_components/conditional-render'

export default function VideoPage() {
  return (
    <>
      <h1>Activity 影片範例</h1>
      <hr />
      <Activity />
      <hr />
      {/* <ConditionalRender /> */}
      <hr />
      {/* <CssDisplayHiding /> */}
      {/* <CssDisplayHidingWithProps /> */}
    </>
  )
}
