'use client'

import { useState, useEffect, useRef } from 'react'
import { useTestFuncStability } from '../_hooks/use-test-func-stability'

/**
 * 使用 ref 來保存最新的 page 值和 fetchPosts 函式引用
 * @returns {React.ReactNode}
*/
export default function WithRefValueFunc() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)

  // 使用 ref 來保存最新的 page 值
  const pageRef = useRef(page)
  // NOTE: 定義 ref 來保存最新的函式引用，避免過時/陳舊的閉包問題。但因為定義在 useEffect 外部，所以每次渲染都會建立新函式(函式引用不穩定)
  const fetchPostsRef = useRef(async () => {
    // 利用 ref 總是獲取最新的 page 值(狀態值)
    const currentPage = pageRef.current
    console.log('fetchPosts: page=', currentPage)

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=5`
    )
    const data = await res.json()
    // 這裡會執行 setState: 更新 posts 狀態
    setPosts(data)
  })

  const fetchPosts = fetchPostsRef.current

  // NOTE: 使用 useTestFuncStability 鉤子來測試函式引用穩定性
  useTestFuncStability(fetchPosts)

  useEffect(() => {
    console.log('useEffect: page=', page)

    // !! 在 effect 中更新 ref，避免在渲染期間寫入 ref
    pageRef.current = page
    // NOTE: 函式引用不穩定，但能訪問最新響應式值
    fetchPosts()
  }, [page]) // 只需要 page 作為依賴，會有eslint警告

  return (
    <>
      <h1>
        在 useEffect 外部定義 fetchPosts(使用 Refs來保存函式引用與傳遞最新值)
      </h1>
      <p>
        [不推薦]
        這樣式雖然函式引用穩定，也能訪問最新響應式值。但它是一種實務上沒人用的樣式，純技術上討論可行性而已，函式全都要靠ref來保存引用，甚至都要手動重新建立函式實在太麻煩也失去響應性。有eslint警告，需要手動忽略。
      </p>
      <p>函式引用穩定，也能訪問最新響應式值</p>
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
