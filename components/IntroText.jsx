export default function IntroText({ title, subtitle, desc }) {
  return (
    <div className="text-left">
      <h2 className="font-ibara text-2xl"> {title}</h2>
      <h3>{subtitle}</h3>
      <p className="pt-6">{desc}</p>

    </div>
  );
}
