'use client'

export default function DataDisplay({ data = [] }) {
  console.log('DataDisplay: render(渲染)')
  return (
    <>
      {data?.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </>
  )
}
