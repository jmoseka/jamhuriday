import Image from "next/image";

export default function PresentCard({ title, desc, img, order }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
      <div
        className={`relative h-[15rem]  xl:h-[20rem] 2xl:h-[23vw] order-2  md:flex-1 ${
          order === 2 ? "md:order-2" : "md:order-none "
        }`}
      >

   
          <Image src={img} alt={img} fill fillstyle={{ objectFit: "cover" }} />
   
      </div>

      <div className="flex-1 order-1">
        <h3 className="heading-two"> {title}</h3>
        <p className="body-text pt-4 2xl:pt-8">{desc}</p>
      </div>
    </div>
  );
}
