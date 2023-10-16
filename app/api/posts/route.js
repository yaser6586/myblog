import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";


export async function GET(request) {
  // return NextResponse.json(data);
  const client = await clientPromise;
  const db = client.db("blog");
  const allPosts = await db.collection("posts").find({}).toArray();
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