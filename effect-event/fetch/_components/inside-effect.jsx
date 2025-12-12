'use client'

import { useState, useEffect } from 'react'

/**
 * 在 useEffect 內部定義 fetchPosts 函式
 * @returns {React.ReactNode}
*/
export default function InsideEffect() {
  // NOTE: 記錄 posts 狀態
  const [posts, setPosts] = useState([])
  // NOTE: 記錄 page 狀態
  const [page, setPage] = useState(1)

  // NOTE: 將 fetchPosts 函式放在 useEffect 內部，避免每次渲染都會建立新函式
  useEffect(() => {
    console.log('useEffect: page=', page)

    // fetchPosts 函式引用穩定，且能存取最新值
    const fetchPosts = async () => {
      console.log('fetchPosts: page=', page)
      // 可以存取到props或state最新值，直接使用 page 即可
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
      )
      const data = await res.json()
      // 這裡會執行 setState: 更新 posts 狀態
      setPosts(data)
    }

    // NOTE: 函式引用穩定，且能訪問最新響應式值
    fetchPosts()
  }, [page]) // 只需要 page 作為依賴

  return (
    <>
      <h2>在 useEffect 內部定義 fetchPosts 函式</h2>
      <p>
        [推薦]
        常見的推薦解決樣式，簡單情況下用這不會有什麼問題。主要的缺點是當程式碼一多容易混一起造成分離不清，不容易維護和閱讀性差。
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
