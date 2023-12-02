import Image from "next/image";

export default function PreCard({ title, desc, img, align }) {
  return (
    <div className="border">
      <div className="md:flex md:justify-between md:items-center">
        <div className="md:h-[1px] md:w-28 md:bg-red-400"></div>
        <h2 className={` text-2xl `}> {title}</h2>
      </div>

      <p className={`border pt-1 md:pt-8 pb-3 w-full ${align}`}>{desc}</p>
      <div className="md:w-full md:pt-8">
        <div className="border md:mx-auto border-white md:w-44">
          <Image width={50} height={200} src="" alt="image" />
        </div>
      </div>
    </div>
  );
}
