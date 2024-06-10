export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className=" mx-auto  max-w-[1200px]  w-full bg-white min-h-screen flex flex-col border-l border-r">
      {children}
    </div>
  );
}
