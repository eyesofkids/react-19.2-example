import { use } from 'react'
import { fetchData } from '../../_data'

export default function Posts() {
  console.log('Posts: render(渲染)')
  const posts = use(fetchData('/posts'))

  return (
    <ul className="items">
      {posts.map((post) => (
        <li className="item" key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  )
}
