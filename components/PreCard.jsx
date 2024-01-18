import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import "aos/dist/aos.css";

export default function PreCard({ title, desc, img, align, order }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    // start, 0.9 - 90% of the window when the opacity style start taking effect
    // at 0.35 at 35% opacity is 1 default: start start
    offset: ["start 0.9", "start 0.35"],
  });

  return (
    <div className="flex flex-col gap-3 2xl:gap-[2.8vw] ">
      <h2 className={`heading-two textTitle`}> {title}</h2>

      <div className=" flex flex-col gap-2 2xl:gap-8">
        <motion.p
          ref={element}
          style={{ opacity: scrollYProgress }}
          className="body-text"
        >
          {desc}
        </motion.p>

        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="relative h-[20rem] lg:h-[23rem] xl-[30rem] 2xl:h-[30vw]"
        >
          <Image src={img} alt={img} fill fillstyle={{ objectFit: "cover" }} />
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
