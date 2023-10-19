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
    <button className="btn btn-error mx-2 " onClick={handleDelete}>
      delete
    </button>
  );
}
