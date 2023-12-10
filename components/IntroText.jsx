import { useScroll, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function IntroText({ title, subtitle, desc }) {
  const element = useRef(null);

  const {scrollYProgress} = useScroll({
    target: element,
    // start, 0.9 - 90% of the window when the opacity style start taking effect
    // at 0.35 at 35% opacity is 1
    offset: ['start 0.8', 'start 0.35']
  })
  return (
    <motion.div ref={element} style={{opacity: scrollYProgress}}  className="text-left md:text-center w-full pb-28">
      <h2 className="font-nunito text-3xl md:text-5xl"> {title}</h2>
      <h3 className="text-subtitle md:text-lg ">{subtitle}</h3>
    </motion.div>
  );
}
