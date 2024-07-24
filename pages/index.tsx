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
        height={384}
        width={384}
        src={SelfImage.src}
        alt="Self"
        className="relative !m-0 max-h-96 min-h-14 min-w-14 max-w-96 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
      />
    </main>
  );
}
