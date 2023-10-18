"use client";
import { redirect } from "next/navigation";
import { useState } from "react";

import { addPost } from "@/lib/fetchData";

function BlogPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [submitted, setSubmitted] = useState(false);
  async function handleClick() {
    if (body.length !== 0 && title.length !== 0) {
      await addPost(title, body);
      setSubmitted(true);
    }
  }
  if (submitted) {
    redirect("/");
  }
  return (
    <div className="min-h-screen ">
      <div className="flex justify-center align-middle ">
        <div className="flex-col w-full">
          <div className="text-center my-10">
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered input-accent w-full max-w-xs  "
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="text-center my-10">
            <textarea
              placeholder="Bio"
              className="textarea textarea-bordered textarea-lg w-full max-w-xs"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <div className="text-center my-10">
            <button className="btn btn-success   " onClick={handleClick}>
              send post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
