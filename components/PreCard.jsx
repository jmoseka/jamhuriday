import Image from "next/image";

export default function PreCard({ title, desc, img, align, order }) {
  return (
    <div className="w-full flex flex-col md:flex-row gap-2 md:gap-2 md:items-center">
      <div
        className={` text-start md:w-[50%] md:text-center md:order-${order}`}
      >
        <h2
          className={`textTitle text-2xl md:text-3xl font-bold text-cardText`}
        >
          {" "}
          {title}
        </h2>
      </div>

      <div className={`flex flex-col gap-5 md:w-1/2`}>
        <p className={``}>{desc}</p>

        <div className="border md:mx-auto border-green-700 md:w-44 h-44">
          <Image  fill src={img} alt={img}/>
        </div>
      </div>
    </div>
  );
}
