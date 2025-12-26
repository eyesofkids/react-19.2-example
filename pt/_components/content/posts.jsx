import { useState, useEffect, useEffectEvent } from 'react'

export default function Posts() {
  console.log('Posts: render(渲染)')
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)

  const fetchPosts = useEffectEvent(async () => {
    // 可以存取到props或state最新值，直接使用 page 即可
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
    )
    const data = await res.json()
    // 這裡會執行 setState: 更新 posts 狀態
    setPosts(data)
  })

  useEffect(() => {
    fetchPosts()
  }, [page])

  return (
    <ul className="items">
      <button onClick={() => setPage(page > 1 ? page - 1 : page)}>
        上一頁
      </button>
      <button onClick={() => setPage(page + 1)}>下一頁</button>
      <p>頁數: {page}</p>
      {posts.map((post) => (
        <li className="item" key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  )
}
