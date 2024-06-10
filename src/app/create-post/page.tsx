import { createPost } from "@/actions/Posts";
import React from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
const page = async () => {
  return (
    <main className="flex h-screen  gap-5 flex-col items-center justify-center">
      <label className="text-5xl" htmlFor="">
        create new Post
      </label>
      <form action={createPost} className="flex flex-col min-w-[400px] gap-2 ">
        <input
          name="title"
          className="border-2 ps-2 capitalize"
          placeholder="enter title of post "
        />
        <textarea
          name="body"
          placeholder="Body content for new post"
          className="border rounded px-3 py-2"
          rows={6}
          required
        />

        <button className="bg-blue-500 rounded-md shadow px-4 text-white py-2">
          submit
        </button>
      </form>
      <LogoutLink>logout</LogoutLink>
    </main>
  );
};

export default page;
