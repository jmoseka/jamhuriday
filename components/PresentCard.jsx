import Image from "next/image";

export default function PresentCard({ title, desc, img, order }) {
  const n = "md:order";
  var val = "";
  if (order) {
    val = `md:order-${order}`;
  }
  return (
    <div className="grid md:grid-cols-2  gap-6 md:gap-8">
      <div
        className={`relative h-[20rem] sm:h-[20rem]  2xl:h-[25vw] ${
          order === 2 ? "md:order-2 " : "" }
        `}
      >
        <Image src={img} alt={img} fill fillstyle={{ objectFit: "cover" }} />
      </div>

      <div className="">
        <h3 className="heading-two"> {title}</h3>
        <p className="body-text pt-1 2xl:pt-8">{desc}</p>
      </div>
    </div>
  );
}
