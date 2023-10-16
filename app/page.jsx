// 'use client'
import { getPost } from '@/lib/fetchData'


export default async function Home() {
  const posts = await getPost()
  return (
   <>
   <div>
    {
      posts.map(pt => <>
       <h1>{pt.title}</h1>
       <p>{pt.body}</p>
      </>
        )
    }
    
   </div>
   </>
  )
}
