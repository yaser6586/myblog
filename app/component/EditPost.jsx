"use client";

import { redirect } from "next/navigation";
import { useState } from "react";

import { editPost } from "@/lib/fetchData";

function EditPost({ posts, params }) {
  const [title, setTitle] = useState(posts.title);
  const [body, setBody] = useState(posts.body);
  const [submitted, setSubmitted] = useState(false);
  if (submitted) {
    redirect(`/blog/${posts._id}`);
  }
  async function handleUpdate() {
    if (body.length !== 0 && title.length !== 0) {
      editPost(title, body, params.id);
      setSubmitted(true);
    }
  }
  return (
    <div className="flex justify-center align-middle w-screen h-screen">
      <div className="flex-col">
        <div className=" my-9 ">
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered input-accent w-full max-w-xs  "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="text-center my-10  ">
          <textarea
            placeholder="Bio"
            className="textarea textarea-bordered textarea-lg w-full  min-w-xs"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="text-center my-10">
          <button className="btn btn-success   " onClick={handleUpdate}>
            save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
