"use client";
import { motion, useSpring, useTime, useTransform } from "framer-motion";
import Link from "next/link";

const AnimatedButton = ({ text, href }) => {
  //rotation
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], { clamp: false });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg ,#004a4f,#006aff,#a0f0dd,#f0a000)`;
  });

  return (
    <div className="flex mt-6">
      <div className="relative">
        <button className="relative bg-black px-3 py-2 rounded-md hover:bg-neutral-900 text-neutral-100 z-10">
          <Link href={href}>{text}</Link>
        </button>
        <motion.div
          className="absolute -inset-[1px] rounded-md bg-yellow-300"
          style={{
            background: rotatingBg,
          }}
        />
      </div>
    </div>
  );
};
export default AnimatedButton;
