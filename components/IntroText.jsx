import { useScroll, motion, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function IntroText({ title, subtitle, desc }) {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    // start, 0.9 - 90% of the window when the opacity style start taking effect
    // at 0.35 at 35% opacity is 1
    offset: ["start end", "start 0.25"],
  });

  const words = title.split(" ");

  return (
    <div className="intro w-full border border-red-400 pt-[27vh]">
      <div className="h-[100%] flex flex-col gap-10">
        <motion.h2
          ref={element}
          style={{ opacity: scrollYProgress }}
          className="font-josefin text-5xl md:text-7xl lg:text-8xl 2xl:text-[7vw]"
        >
          {words.map((word, index) => {
            const start = index / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={index} range={[start, end]} progress={scrollYProgress}>
                {word}{" "}
              </Word>
            );
          })}
        </motion.h2>

        <div className="flex flex-col gap-2 2xl:gap-24">
          <h3 className="text-subtitle text-xl md:text-2xl 2xl:text-[1.8vw]">{subtitle}</h3>
          <p className="md:w-[80%] text-[0.93rem] md:text-base 2xl:text-[1vw]  2xl:leading-[1.3vw]">{desc}</p>
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
