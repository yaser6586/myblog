import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";


export async function GET(request, { params }) {
    const client = await clientPromise;
    const db = client.db("blog");
    const post = await db
      .collection("posts")
      .find({ _id: new ObjectId(params.id) })
      .toArray();
    return NextResponse.json(post);
  }