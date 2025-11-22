'use client'

import CssDisplayHiding from './_components/css-display-hiding'
import ActivityHiddenFirst from './_components/activity-hidden-first'
import ActivityVisibleFirst from './_components/activity-visible-first'
import ConditionalRender from './_components/conditional-render'

export default function BasicPage() {
  return (
    <>
      <h1>Activity 基本範例(時鐘)</h1>
      <hr />
      {/* <CssDisplayHiding /> */}
      <hr />
      {/* <ConditionalRender /> */}
      <hr />
      <ActivityHiddenFirst />
      <hr />
      {/* <ActivityVisibleFirst /> */}
    </>
  )
}
