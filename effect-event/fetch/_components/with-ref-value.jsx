'use client'

import { useState, useEffect, useRef } from 'react'
import { useTestFuncStability } from '../_hooks/use-test-func-stability'

/**
 * 使用 ref 來保存最新的 page 值和 fetchPosts 函式引用
 * @returns {React.ReactNode}
*/
export default function WithRefValue() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)

  // 定義 ref 來保存最新的 page 值
  const pageRef = useRef(page)

  // NOTE: 使用 ref 來保存最新的 page 值，避免過時/陳舊的閉包問題。但因為定義在 useEffect 外部，所以每次渲染都會建立新函式(函式引用不穩定)
  const fetchPosts = async () => {
    // 利用 ref 總是獲取最新的 page 值(狀態值)
    const currentPage = pageRef.current
    console.log('fetchPosts: page=', currentPage)

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=5`
    )
    const data = await res.json()
    // 這裡會執行 setState: 更新 posts 狀態
    setPosts(data)
  }

  // NOTE: 使用 useTestFuncStability 鉤子來測試函式引用穩定性
  useTestFuncStability(fetchPosts)

  useEffect(() => {
    console.log('useEffect: page=', page)

    // !! 在 effect 中更新 ref，避免在渲染期間寫入 ref
    pageRef.current = page
    // NOTE: 函式引用不穩定，但能訪問最新響應式值
    fetchPosts()
  }, [page]) // 只需要 page 作為依賴，不會有eslint警告

  return (
    <>
      <h1>在 useEffect 外部定義 fetchPosts(使用 Refs)</h1>
      <p>
        [不推薦]
        這樣式只是為了解決eslint警告，實際上函式引用不穩定，但能訪問最新響應式值
      </p>
      <p>
        函式引用不穩定，但能訪問最新響應式值，不是在Effect內部用傳入參數的方式，而是用
        ref 來保存最新的響應式值
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
