// from: https://react.dev/reference/react/Activity

// Note: the way you would do data fetching depends on
// the framework that you use together with Suspense.
// Normally, the caching logic would be inside a framework.

// use local json file to simulate the data fetching
import products from './products.json'

let cache = new Map()

export function fetchData(url) {
  if (!cache.has(url)) {
    cache.set(url, getData(url))
  }
  return cache.get(url)
}

async function getData(url) {
  // posts data
  if (url.startsWith('/posts')) {
    return await getPosts()
    // add products data
  } else if (url.startsWith('/products')) {
    return await getProducts()
  } else {
    throw Error('Not implemented')
  }
}

async function getPosts() {
  // Add a fake delay to make waiting noticeable.
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
  let posts = []
  for (let i = 0; i < 10; i++) {
    posts.push({
      id: i,
      title: 'Post #' + (i + 1),
    })
  }
  return posts
}

async function getProducts() {
  // Add a fake delay to make waiting noticeable.
  await new Promise((resolve) => {
    setTimeout(resolve, 5000)
  })

  return products
}
