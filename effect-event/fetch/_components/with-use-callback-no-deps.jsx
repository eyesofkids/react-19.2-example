'use client'

import { useState, useEffect, useCallback } from 'react'
import { useTestFuncStability } from '../_hooks/use-test-func-stability'

/**
 * 使用 useCallback 定義 fetchPosts 函式，但沒有依賴項
 * @returns {React.ReactNode}
*/
export default function WithUseCallbackNoDeps() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)

  console.log('WithUseCallbackNoDeps render')

  // NOTE: 將 fetchPosts 函式放在 useEffect 外部，使用 useCallback 讓函式穩定引用。但它需要將更新的響應式值以參數的方式傳入，不然是得不到最新值的
  const fetchPosts = useCallback(async (page) => {
    console.log('fetchPosts: page=', page)
    // 可以存取到props或state最新值，使用傳入的 page 即可
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
    )
    const data = await res.json()
    // 這裡會執行 setState: 更新 posts 狀態
    setPosts(data)
  }, [])

  // NOTE: 使用 useTestFuncStability 鉤子來測試函式引用穩定性
  useTestFuncStability(fetchPosts)

  // page 改變時，執行 fetchPosts 函式
  useEffect(() => {
    console.log('useEffect: page=', page)

    // NOTE: 函式引用穩定，可以訪問最新 page 值(參數值)
    // 這是 React 19.2 中 eslint-plugin-react-hooks 的 set-state-in-effect 規則警告。但 fetchPosts 實際上是異步的，setState 不會同步執行觸發級聯渲染，所以可以安全地忽略此警告，算是較嚴格的檢查，主要不希望使用者誤用，不加下面這行會有eslint警告
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchPosts(page)
  }, [page, fetchPosts]) // 實際上只需要 page 作為依賴，fetchPosts不加會有eslint警告

  return (
    <>
      <h1>在 useEffect 外部定義 fetchPosts 函式(useCallback無依頼項)</h1>
      <p>
        [不推薦]
        這樣式也是解決得到最新響應值與函式引用穩定，但在複雜應用的場景下可能會有些混亂。目前也會有觸發較嚴格的eslint警告，需要手動忽略
      </p>
      <p>
        函式引用穩定，且能訪問最新響應式值(以函式引用穩定性定義來說是「穩定的」，不會因為無關連的響應式值改變而重新建立)
      </p>
      <hr />
      <button onClick={() => setPage((page) => (page > 1 ? page - 1 : page))}>
        前一頁
      </button>
      <button onClick={() => setPage((page) => page + 1)}>下一頁</button>
      <p>頁數: {page}</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id}: {post.title}
          </li>
        ))}
      </ul>
    </>
  )
}
