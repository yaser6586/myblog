"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";

import { rmPost } from "@/lib/fetchData";

export default function DeletePost({ postId }) {
  const [deleted, setDeleted] = useState(false);

  if (deleted) {
    redirect("/");
  }
  function handleDelete() {
    rmPost(postId);

    setDeleted(true);
  }
  return (
    <button className="btn btn-error " onClick={handleDelete}>
      delete
    </button>
  );
}
