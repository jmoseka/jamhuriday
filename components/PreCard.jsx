import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function PreCard({ title, desc, img, align, order }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    // start, 0.9 - 90% of the window when the opacity style start taking effect
    // at 0.35 at 35% opacity is 1 default: start start
    offset: ["start 0.9", "start 0.35"],
  });

  return (
    <div className="w-full flex flex-col md:flex-row gap-2 md:gap-2 md:items-center">
      <div
        className={` text-start md:w-[50%] md:text-center md:order-${order}`}
      >
        <h2
          className={`textTitle text-2xl md:text-3xl font-bold text-cardText`}
        >
          {" "}
          {title}
        </h2>
      </div>

      <div className={`flex flex-col gap-5 md:gap-0 md:w-1/2`}>
        <motion.p ref={element} style={{ opacity: scrollYProgress }}>
          {desc}
     
        </motion.p>

        <div className="relative md:mx-auto md:w-full h-60">
          <Image src={img} alt={img} layout="fill" objectFit="cover"/>
        </div>
      </div>
    </div>
  );
}

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="word">
      <span className="shadow">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
