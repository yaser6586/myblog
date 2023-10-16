// 'use client'
import { getPost } from '@/lib/fetchData'
import Post from './component/Post'


export default async function Home() {
  const posts = await getPost()
  return (
   <>
   <div>
    {
      posts.map(pt => <div key={pt.id}> <Post  posts={pt}/> </div>
        )
    }
    
   </div>
   </>
  )
}
