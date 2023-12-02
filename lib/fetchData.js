import { API_URL } from "@/config/config";
// import { revalidatePath } from "next/cache";

export async function getAllPosts(page, limit) {
  const res = await fetch(`${API_URL}/api/posts?p=${page}&l=${limit}`, {
    cache: "no-store",
  });
  const PostData = res.json();

  return PostData;
}

export async function getPost(id) {
  const res = await fetch(`${API_URL}/api/posts/${id}`, {
    cache: "no-store",
  });
  const post = res.json();
  return post;
}
export async function addPost(title, body) {
  fetch(`${API_URL}/api/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ title, body }),
  });
  // revalidatePath("/", (type = "page"));
}

export async function rmPost(postId) {
  fetch(`${API_URL}/api/deletpost/` + postId, {
    method: "DELETE",
  });
}

export async function editPost(title, body, id) {
  fetch(`${API_URL}/api/editpost/` + id, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },

    body: JSON.stringify({ title, body }),
  });
}
