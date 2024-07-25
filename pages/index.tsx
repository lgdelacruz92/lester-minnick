import Image from "next/image";
import { Inter } from "next/font/google";
import {
  useMotionValue,
  AnimatePresence,
  motion,
  useSpring,
  useTransform,
} from "framer-motion";
import SelfImage from "@/public/images/self.jpg";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const SelfData = {
  name: "Lester Minnick",
  title: "Special Full Stack Engineer that can turn coffee into code.",
};

export default function Home() {
  const [showLabel, setShowLabel] = useState<boolean>(false);
  const x = useMotionValue(0);

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  const springConfig = { stiffness: 100, damping: 5 };
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div
        className="group relative"
        onMouseEnter={() => setShowLabel(true)}
        onMouseLeave={() => setShowLabel(false)}
      >
        <AnimatePresence mode="popLayout">
          {showLabel && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className="absolute -top-16 z-50 flex flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
            >
              <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
              <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
              <div className="relative z-30 text-base font-bold text-white">
                {SelfData.name}
              </div>
              <div className="text-xs text-white">{SelfData.title}</div>
            </motion.div>
          )}
        </AnimatePresence>
        <Image
          onMouseMove={handleMouseMove}
          height={384}
          width={384}
          src={SelfImage.src}
          alt="Self"
          className="relative !m-0 h-44 w-44 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105 sm:h-96 sm:w-96"
        />
      </div>
    </main>
  );
}
