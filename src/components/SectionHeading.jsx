import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, note }) {
  return (
    <Reveal className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {note && <p>{note}</p>}
    </Reveal>
  );
}
