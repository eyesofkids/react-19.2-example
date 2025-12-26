import { promises as fs } from 'fs'
import ActivitySuspense from './_components/activity-suspense'

// RSC(React Server Component)
export default async function PtPage() {
  const file = await fs.readFile(
    process.cwd() + '/app/pt/_data/sample.json',
    'utf8'
  )

  const data = JSON.parse(file)
  console.log(data)

  return <ActivitySuspense data={data} />
}
