import Image from "next/image";

export default function PresentCard({ title, desc, img, order }) {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-8">
      <div
        className={`relative h-[15rem]  xl:h-[20rem] 2xl:h-[23vw] order-2  md:flex-1 border ${
          order === 2 ? "md:order-2" : "md:order-none "
        }`}
      >

   
          <Image src={img} alt={img} fill fillstyle={{ objectFit: "cover" }} />
   
      </div>

      <div className="flex-1 order-1 ">
        <h3 className="text-cardText text-xl md:text-3xl 2xl:text-[2vw]"> {title}</h3>
        <p className="pt-2 2xl:pt-24 font-light pb-3 text-[0.93rem] md:text-base 2xl:text-[1.1vw]  2xl:leading-[1.4vw]">{desc}</p>
      </div>
    </div>
  );
}
