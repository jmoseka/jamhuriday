import Image from "next/image";

export default function PresentCard({ title, desc, img, order }) {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-8">
      <div
        className={`h-[15rem]  md:flex-1 border ${
          order === 2 ? "md:order-2" : "" 
        }`}
      >
        <Image src="" alt="image" />
      </div>

      <div className="flex-1 order-1 md:order-none">
        <h3 className=" text-2xl"> {title}</h3>
        <p className="pt-1 pb-3">{desc}</p>
      </div>
    </div>
  );
}
