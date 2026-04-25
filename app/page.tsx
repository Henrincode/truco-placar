import Image from "next/image";

export default function Home() {
  return (
    <div className="
      bg-cover
      bg-center
      bg-[url('/bg.jpg')]
    ">
      <div className="
      flex justify-center items-center
      min-h-dvh
      font-sancreek
      text-6xl

      backdrop-blur-lg
      backdrop-saturate-40
    ">
        Olá Mundo!
      </div>
    </div>
  );
}
