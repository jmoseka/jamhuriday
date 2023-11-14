import Image from "next/image";

export default function ResistantCard({ title, desc, img }) {
  return (
    <div className="">
      <div className="flex items-center">
        <h2 className="text-xl"> {title}</h2>
        <span className="resistant-line"></span>
      </div>

      <div className="">
        <div className="border-2 mr-3 mb-[0.11rem] float-left border-white">
          <Image width={200} height={100} src="" alt="image" />
        </div>
        <p dangerouslySetInnerHTML={{ __html: desc }}  className=" pb-3"/>
      </div>
    </div>
  );
}
