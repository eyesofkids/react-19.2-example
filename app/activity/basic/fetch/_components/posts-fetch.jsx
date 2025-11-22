'use client'

import React, { useState, useEffect } from 'react'

export default function PostsFetch() {
  const [posts, setPosts] = useState([])

  console.log(`PostsFetch render(渲染), posts: ${posts}`)

  useEffect(() => {
    console.log('PostsFetch: mount(掛載), posts: ', posts)

    const fetchPosts = async () => {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5'
      )
      const data = await res.json()
      setPosts(data)
    }

    fetchPosts()

    return () => {
      console.log('PostsFetch: unmount(卸載), posts: ', posts)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      title="PostsFetch"
      style={{
        border: '2px solid red',
        padding: '10px',
        height: '150px',
      }}
    >
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
