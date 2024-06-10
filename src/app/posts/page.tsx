import prisma from "@/lib/db";
import { Post } from "@/types";
import Link from "next/link";
import React from "react";

const page = async () => {
  const data: Post[] = await prisma.post.findMany({});

  return (
    <main className="bg-white  min-h-screen text-center pt-32 px-5">
      {data?.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </Link>
      ))}
    </main>
  );
};

export default page;
