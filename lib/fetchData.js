import { API_URL } from "@/config/config";

export async function getAllPosts() {
  const res = await fetch(`${API_URL}/api/posts`, {
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
}

export async function rmPost(postId) {
  fetch(`${API_URL}/api/deletpost/` + postId, {
    method: "DELETE",
  });
}

export async function editPost(id) {
  fetch(`${API_URL}/api/editPost/` + id, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },

    body: JSON.stringify({ title, body }),
  });
}
