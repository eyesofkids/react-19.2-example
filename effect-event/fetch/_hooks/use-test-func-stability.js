import { useEffect, useRef } from 'react'

/**
 * 測試函式引用穩定性
 * @param {Function} func - 要測試的函式
 * @returns {null}
*/
export const useTestFuncStability = (func = null) => {
  // NOTE: 記錄函式引用，用於比較當前引用和上一次的引用
  const prevFuncRef = useRef(null)
  // NOTE: 記錄是否第一次渲染
  const isFirstRenderRef = useRef(true)

  useEffect(() => {
    // 忽略第一次渲染，因為第一次渲染時沒有上一次的引用可以比較
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false
      prevFuncRef.current = func
      console.log('🔍[測試]函式引用穩定性: 第一次渲染，函式=', func)
      return
    }

    // 從第二次渲染開始，比較當前引用和上一次的引用
    const isStable = prevFuncRef.current === func
    const funcName = func?.name || 'anonymous'

    console.log(`🔍[測試]函式引用穩定性: 函式名="${funcName}" 函式=`, func)

    if (!isStable) {
      console.warn('⚠️[測試結果]函式引用不穩定。每次渲染都建立新函式!')
    } else {
      console.log(
        '✅[測試結果]函式引用穩定。每次渲染不會都建立函式(視相依賴值更動決定)'
      )
    }

    prevFuncRef.current = func
  }) // 每次渲染都會執行，單純測試用途

  return null
}
