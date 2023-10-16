import { API_URL } from "@/config/config";


export async function getPost() {
  const res = await fetch(`${API_URL}/api/posts`, {
    cache: "no-store",
  });
  const PostData = res.json();

  return PostData;
}