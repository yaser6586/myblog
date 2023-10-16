import { API_URL } from "@/config/config";


export async function getAllPosts() {
  const res = await fetch(`${API_URL}/api/posts`, {
    cache: "no-store",
  });
  const PostData = res.json();

  return PostData;
}


export async function getPost(id) {
  const res =  await fetch(`${API_URL}/api/posts/${id}` , {
    cache: "no-store",
  });
  const post = res.json();
  return post
}