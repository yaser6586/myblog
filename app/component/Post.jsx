import React from "react";
import Image from "next/image";
import Link from "next/link";

function Post({ posts }) {
  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        <div className="card lg:card-side bg-base-100 shadow-xl m-3 ">
          <figure>
            <Image height={200} width={200} src="/post.jpg" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{posts.title}</h2>
            <h2>{posts.id}</h2>
            <p>{posts.body.slice(0, 25)}</p>
            <div className="card-actions justify-end">
              <Link href={`blog/${posts._id}`}>
                <button className="btn btn-primary">read</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
