import Image from "next/image";

export default function PresentCard({ title, desc, img, order}) {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-5">
      <div className={`flex-1 border ${order === 2 ? 'md:order-2' : ''}`}>
        <Image className="h-44 md:h-auto" src="" alt="image" />
      </div>

      <div className="flex-1">
        <h3 className=" text-2xl"> {title}</h3>
        <p className="pt-1 pb-3">{desc}</p>
      </div>
    </div>
  );
}
