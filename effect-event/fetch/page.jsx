'use client'

import { useState } from 'react'

// 只推薦InsideEffect在單純簡單應用情況
import InsideEffect from './_components/inside-effect'
import OutsideEffect from './_components/outside-effect'
// 只有使用Refs來解決的樣式，都不推薦
import WithRefValue from './_components/with-ref-value'
import WithRefValueFunc from './_components/with-ref-value-func'
// 只有使用useCallback來解決的樣式，目前都可能出現eslint警告，不推薦
import WithUseCallbackNoDeps from './_components/with-use-callback-no-deps'
import WithUseCallbackHasDeps from './_components/with-use-callback-has-deps'
// 目前最常見的解決樣式，只推薦19.2+(Next 16+)之前，之後要逐步改用
import WithUseCallbackRefs from './_components/with-use-callback-refs'
// 新的解決樣式，推薦19.2+(Next 16+)之後要改用
import WithEffectEvent from './_components/with-effect-event'

export default function FetchPage() {
  // 觸發強制父母元件渲染用，測試子女元件被重新渲染後的函式引用是否穩定
  const [force, setForce] = useState(false)

  return (
    <>
      <h1>useEffectEvent(以Fetch API為例)</h1>
      <button
        onClick={() => {
          setForce(!force)
        }}
      >
        強制重新渲染
      </button>
      <hr />
      {/* ---只推薦InsideEffect在單純簡單應用情況--- */}
      {/* <InsideEffect /> */}
      {/* <OutsideEffect /> */}
      {/* ---只使用Refs來解決的樣式，不推薦--- */}
      {/* <WithRefValue /> */}
      {/* <WithRefValueFunc /> */}
      {/* ---只使用useCallback來解決的樣式，目前都可能出現eslint警告，不推薦--- */}
      {/* <WithUseCallbackNoDeps /> */}
      {/* <WithUseCallbackHasDeps /> */}
      {/* ---目前最常見的解決樣式--- */}
      {/* <WithUseCallbackRefs /> */}
      {/* ---新的解決樣式，推薦19.2+(Next 16+)之後要改用--- */}
      <WithEffectEvent />
    </>
  )
}
