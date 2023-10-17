import { getAllPosts } from "@/lib/fetchData";
import Post from "./component/Post";
import Link from "next/link";
import { API_URL } from "@/config/config";

export default async function Home({ searchParams }) {
  const page = typeof searchParams.p === "string" ? Number(searchParams.p) : 0;
  const limit = typeof searchParams.l === "string" ? Number(searchParams.l) : 3;
  const posts = await getAllPosts(page, limit);
  const max = Math.ceil(posts.length) / limit + 1;
  return (
    <>
      <div>
        <div className="text-center"></div>
        {posts.map((pt) => (
          <div key={pt.id}>
            <Post posts={pt} />
          </div>
        ))}
        <div className="text-center flex justify-center ">
          {page > 0 && (
            <Link
              href={`${API_URL}?p=${page > 1 ? page - 1 : 0}`}
              className="btn btn-outline btn-accent m-5"
            >
              prev
            </Link>
          )}
          <h3 className="mt-7">page {page + 1}</h3>
          {page < max && (
            <Link
              href={`${API_URL}?p=${page < max ? page + 1 : max}`}
              // className="btn btn-outline btn-accent m-5 "
              className="btn btn-outline btn-accent m-5"
            >
              next
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
