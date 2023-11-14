import Image from "next/image";

export default function PreCard({ title, desc, img }) {
    return (
      <div className="">
        <h2 className=" text-2xl"> {title}</h2>
        <p className="pt-1">{desc}</p>
        <div className="border-4 border-white">
        <Image width={300} height={300} src='' alt="image" />
        </div>
  
      </div>
    );
  }