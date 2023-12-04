export default function IntroText({ title, subtitle, desc }) {
  return (
    <div className="text-left md:text-center w-full">
      <h2 className="font-nunito text-3xl md:text-5xl"> {title}</h2>
      <h3 className="text-subtitle md:text-lg">{subtitle}</h3>
      <p className="pt-6 pb-20  w-full">{desc}</p>
    </div>
  );
}
