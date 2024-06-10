import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1 className="text-4xl mt-20 text-center flex items-center justify-center font-bold mg-5 md:text-5xl">
        welcome to my Posts
      </h1>
      {children}
    </div>
  );
};

export default layout;
