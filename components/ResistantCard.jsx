import Image from "next/image";

export default function ResistantCard({ title, desc, img, float, align }) {
  return (
    <div className="flex flex-col">
      <div className="pb-2">
        <h2 className={`textTitle ${align === 'right' ? 'md:text-right' : 'text-left'}`}> {title}</h2>
      </div>

      <div className="">
        <div
          className={`border w-[60%]  h-[20rem] mr-3 mb-[0.11rem] border-white`}
        >
          <Image src="" alt="image" />
        </div>
        <p dangerouslySetInnerHTML={{ __html: desc }} className=" pb-3" />
      </div>
    </div>
  );
}
