'use client'

import { useState, useEffect, useEffectEvent } from 'react'

/**
 * 使用 useEffectEvent 定義 fetchPosts 函式
 * @returns {React.ReactNode}
*/
export default function WithEffectEvent() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)

  // NOTE: 推薦新樣式：useEffectEvent 專門為這種場景設計
  const fetchPosts = useEffectEvent(async () => {
    console.log('fetchPosts: page=', page)
    // 可以存取到props或state最新值，直接使用 page 即可
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
    )
    const data = await res.json()
    // 這裡會執行 setState: 更新 posts 狀態
    setPosts(data)
  })

  useEffect(() => {
    console.log('useEffect: page=', page)
    // NOTE: 函式引用穩定，且能訪問最新響應式值
    fetchPosts()
  }, [page]) // 只需要 page 作為依賴，不需要 fetchPosts 函式引用

  return (
    <>
      <h1>使用 useEffectEvent</h1>
      <p>
        [推薦] 新的推薦解決樣式，它就是為了這場景設計出來的。但目前React
        19.2+(Next 16+)才支援
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
