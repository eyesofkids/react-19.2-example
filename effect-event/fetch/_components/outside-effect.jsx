'use client'

import { useState, useEffect } from 'react'
import { useTestFuncStability } from '../_hooks/use-test-func-stability'

/**
 * 在 useEffect 外部定義 fetchPosts 函式
 * @returns {React.ReactNode}
*/
export default function OutsideEffect() {
  // NOTE: 記錄 posts 狀態
  const [posts, setPosts] = useState([])
  // NOTE: 記錄 page 狀態
  const [page, setPage] = useState(1)

  // NOTE: 將 fetchPosts 函式放在 useEffect 外部，每次渲染都會建立新函式(函式引用不穩定)，但因為使用傳入參數的方式，所以能訪問最新值
  const fetchPosts = async (page) => {
    console.log('fetchPosts: page=', page)
    // 可以存取到props或state最新值，直接使用 page 即可
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
    )
    const data = await res.json()
    // 這裡會執行 setState: 更新 posts 狀態
    setPosts(data)
  }

  // NOTE: 使用 useTestFuncStability 鉤子來測試函式引用穩定性
  useTestFuncStability(fetchPosts)

  useEffect(() => {
    console.log('useEffect: page=', page)

    // NOTE: 函式引用不穩定，但能訪問最新響應式值
    fetchPosts(page)
    //Error: Calling setState synchronously within an effect can trigger cascading renders
    // !! 上面會出現要求把fetchPosts加到依賴中的警告，但加入後會導致級聯渲染(cascading renders)/無窮循環渲染，因為函式引用不穩定，會因為無關連的響應式值改變而重新建立。但用「eslint-disable-next-line」的方式忽略，則會在編譯時出現「React Compiler has skipped optimizing this component because one or more React ESLint rules were disabled」的警告
  }, [page]) // 只需要 page 作為依賴，加入 fetchPosts 會導致級聯渲染(cascading renders)/無窮循環渲染

  return (
    <>
      <h2>在 useEffect 外部定義 fetchPosts 函式</h2>
      <p>[不建議] 這方式是目前不建議的樣式，很容易一不小心就出錯</p>
      <p>
        函式引用不穩定，因為使用傳入參數的方式，所以能訪問最新值。這方式會產生級聯渲染(cascading
        renders)/無窮循環渲染。「這方式是最不建議的方式，非常容易出錯」。
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
