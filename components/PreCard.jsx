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
  const words = desc.split(" ");

  // useEffect(() => {
  //   scrollYProgress.on('change', e => console.log(e))
  // }, [])

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

      <div className={`flex flex-col gap-5 md:w-1/2`}>
        <p ref={element} className="paragraph">
          {words.map((word, index) => {
            const start = index / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={index} range={[start, end]} progress={scrollYProgress}>
                {word}{" "}
              </Word>
            );
          })}
        </p>

        <div className="border md:mx-auto border-red-700 md:w-44 h-44">
          <Image src={img} alt={img} />
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
      <motion.span style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
};
