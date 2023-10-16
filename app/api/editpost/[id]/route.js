import { NextResponse } from "next/server";

import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

export async function PATCH(request, { params }) {
  const client = await clientPromise;
  const { title, body } = await request.json();
  const db = client.db("blog");
  const upPosts = await db
    .collection("posts")
    .updateOne(
      { _id: new ObjectId(params.id) },
      { $set: { title: title, body: body } }
    );
  return NextResponse.json(upPosts);
}
