import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("p"));
  const limit = Number(searchParams.get("l"));
  const skip = page * limit;

  const client = await clientPromise;
  const db = client.db("blog");
  const allPosts = await db
    .collection("posts")
    .find({})
    .limit(limit)
    .skip(skip)
    .toArray();
  return NextResponse.json(allPosts);
}
export async function POST(request) {
  const client = await clientPromise;
  const db = client.db("blog");
  const { title, body } = await request.json();
  const newPost = {
    title: title,
    body: body,
  };
  let myPost = await db.collection("posts").insertOne(newPost);

  return NextResponse.json(myPost);
}
