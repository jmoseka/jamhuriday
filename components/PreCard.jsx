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
    <div className="flex flex-col gap-4 2xl:gap-[2.8vw]">
      <h2 className={`textTitle text-2xl md:text-3xl 2xl:text-[2vw]`}>
        {" "}
        {title}
      </h2>

      <div className="flex flex-col gap-4 2xl:gap-8">
        <motion.p
          ref={element}
          style={{ opacity: scrollYProgress }}
          className="font-light text-[0.93rem] md:text-base 2xl:text-[1.1vw]  2xl:leading-[1.4vw]"
        >
          {desc}
        </motion.p>

        <div className=" relative h-[20rem] xl:h[25vw] 2xl:h-[28vw]">
          <Image src={img} alt={img} fillstyle={{objectFit:"cover"}} />
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
