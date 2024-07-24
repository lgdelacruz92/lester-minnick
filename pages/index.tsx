import Image from "next/image";
import { Inter } from "next/font/google";
import { useMotionValue } from "framer-motion";
import SelfImage from "@/public/images/self.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const x = useMotionValue(0);

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Image
        onMouseMove={handleMouseMove}
        height={100}
        width={100}
        src={SelfImage.src}
        alt="Self"
        className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
      />
    </main>
  );
}
