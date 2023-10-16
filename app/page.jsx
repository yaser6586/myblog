// 'use client'
import { getPost } from '@/lib/fetchData'
import Post from './component/Post'


export default async function Home() {
  const posts = await getPost()
  return (
   <>
   <div>
    {
      posts.map(pt => <Post posts={pt}/>
        )
    }
    
   </div>
   </>
  )
}
