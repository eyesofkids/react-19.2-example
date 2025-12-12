'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useTestFuncStability } from '../_hooks/use-test-func-stability'

/**
 * 使用 useCallback 定義 fetchPosts 函式，並使用 ref 來保存最新的 page 值
 * @returns {React.ReactNode}
*/
export default function WithUseCallbackRefs() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  // NOTE: 使用 useRef 來保存最新的 page 值
  const pageRef = useRef(page)

  // NOTE: 將 fetchPosts 函式放在 useEffect 外部，使用 useCallback 讓函式穩定引用
  const fetchPosts = useCallback(async () => {
    // 利用 ref 總是獲取最新的 page 值(狀態值)
    const currentPage = pageRef.current
    console.log('fetchPosts: page=', currentPage)
    // 可以存取到props或state最新值，使用傳入的 page 即可
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=5`
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
    // 每次渲染時更新 ref 的值
    pageRef.current = page

    // NOTE: 函式引用穩定，且能訪問最新響應式值
    fetchPosts()
  }, [page, fetchPosts]) // 實際上只需要 page 作為依賴，但是fetchPosts不加會有eslint警告

  return (
    <>
      <h2>
        在 useEffect 外部定義 fetchPosts
        函式(用useCallback讓函式引用穩定+Refs存取最新響應式值)
      </h2>
      <p>
        [推薦]
        這是目前最常見在這場景下用的樣式，但有useEffectEvent之後可能要逐步換到新的去，當然這也是為了未來可以與React
        Compiler的自動最佳化機制作更好的搭配。
      </p>
      <p>
        函式引用穩定，且能訪問最新值(以函式引用穩定性定義來說是「穩定的」，不會因為無關連的響應式值改變而重新建立)
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
