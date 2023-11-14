export default function IntroText({ title, subtitle, desc }) {
  return (
    <div className="text-left">
      <h2 className="font-ibara text-3xl"> {title}</h2>
      <h3 className="text-[#999999]">{subtitle}</h3>
      <p className="pt-6">{desc}</p>

    </div>
  );
}
