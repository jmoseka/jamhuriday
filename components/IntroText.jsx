import { useScroll, motion, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function IntroText({ title, subtitle, desc }) {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    // start, 0.9 - 90% of the window when the opacity style start taking effect
    // at 0.35 at 35% opacity is 1
    offset: ["start 0.8", "start 0.35"],
  });

  const words = title.split(" ");

  return (
    <motion.div
      ref={element}
      style={{ opacity: scrollYProgress }}
      className="text-left md:text-center w-full pb-28"
    >
      <h2 className="font-nunito text-3xl md:text-5xl">
        {words.map((word, index) => {
          const start = index / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={index} range={[start, end]} progress={scrollYProgress}>
              {word}{" "}
            </Word>
          );
        })}
      </h2>
      <h3 className="text-subtitle md:text-lg ">{subtitle}</h3>
    </motion.div>
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
