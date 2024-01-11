import Image from "next/image";


export default function PresentCard({ title, desc, img, order }) {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-8">
      <div
        className={`h-[15rem] order-2  md:flex-1 border ${
          order === 2 ? "md:order-2" : "md:order-none "
        }`}
      >
        <Image src={img} alt="image" />
      </div>

      <div className="flex-1 order-1 ">
        <h3 className=" text-2xl"> {title}</h3>
        <p className="pt-1 pb-3">{desc}</p>
      </div>
    </div>
  );
}
