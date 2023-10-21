import DeletePost from "@/app/component/DeletePost";
import { getPost } from "@/lib/fetchData";
import Link from "next/link";
import React from "react";
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id;

  // fetch data
  const product = await getPost(id);
  const pt = product[0];
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: pt.title,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

async function PostDetail({ params }) {
  const posts = await getPost(params.id);

  // we only want object that is in array so we choose first item of array
  const pt = posts[0];

  return (
    <div className="min-h-screen">
      <h2 className="text-center h-28 my-14 text-4xl	rounded-md w-1/2 mx-auto">
        {pt.title}
      </h2>
      <p className="text-center bg-base-200 mx-10 p-10">{pt.body}</p>
      <div className="text-center my-10 ">
        <DeletePost postId={pt._id} />

        <Link href={`/blog/edit/${params.id}`}>
          <button className="btn btn-primary w-20">edit</button>
        </Link>
      </div>
    </div>
  );
}

export default PostDetail;
