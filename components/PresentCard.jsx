import Image from "next/image";

export default function PresentCard({ title, desc, img, order }) {
  const n = 2;
  var val = "";
  if (order) {
    val = `md:order-${order}`;
  }
  return (
    <div className="grid grid-cols-2 gap-8">
      <div
        className={`relative h-[16rem] lg:h-[20rem] xl:h-[25rem] 2xl:h-[25vw] ${order ? `md:order-${order}` : ''}`}
      >
        <Image src={img} alt={img} fill fillstyle={{ objectFit: "cover" }} />
      </div>

      <div className="">
        <h3 className="heading-two"> {title}</h3>
        <p className="body-text pt-4 2xl:pt-8">{desc}</p>
      </div>
    </div>
  );
}
