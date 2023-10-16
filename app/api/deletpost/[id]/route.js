import { NextResponse } from "next/server";

import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

export async function DELETE(request, { params }) {
  const client = await clientPromise;
  const db = client.db("blog");
  const delPosts = await db
    .collection("posts")
    .deleteOne({ _id: new ObjectId(params.id) });
  return NextResponse.json(delPosts);
}