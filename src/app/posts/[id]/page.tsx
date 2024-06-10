import prisma from "@/lib/db";
import { Post } from "@/types";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params: { id } }: { params: { id: number } }) => {
  const post: Post | null = await prisma.post.findUnique({
    where: { id: Number(id) },
  });

  if (!post) notFound();

  return (
    <main className="px-7 pt-24 text-center">
      <h1></h1>
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </main>
  );
};

export default page;
