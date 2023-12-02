export default function IntroText({ title, subtitle, desc }) {
  return (
    <div className="text-left md:text-center w-full">
      <h2 className="font-ibara text-3xl md:text-5xl"> {title}</h2>
      <h3 className="text-[#999999] md:text-xl">{subtitle}</h3>
      <p className="pt-6 w-full">{desc}</p>

    </div>
  );
}
