import { GraduationCap, Heart, Sparkles, Trophy } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import Reveal from "../../components/Reveal";

const highlights = [
  { Icon: Trophy, eyebrow: "HACKATHON", title: "1st Place", text: "Zero Gachi National Hackathon" },
  { Icon: Sparkles, eyebrow: "GLOBAL AI", title: "Finalist", text: "USAII Global AI Hackathon 2026" },
  { Icon: GraduationCap, eyebrow: "CERTIFICATIONS", title: "Keep learning", text: "IBM RAG & Agentic AI · Full-Stack JavaScript · EF SET B2" },
  { Icon: Heart, eyebrow: "COMMUNITY", title: "Growing together", text: "GDG · Nexus IT Club · IEEE Computer Society" },
];

export default function Beyond() {
  return (
    <section className="beyond section-wrap" id="beyond">
      <SectionHeading
        eyebrow="04 — BEYOND THE CODE"
        title={<>The work matters.<br /><em>So does the person.</em></>}
        note="Learning is not only about technologies. It's also about people, collaboration, courage and showing up for a challenge."
      />

      <div className="beyond-grid">
        {highlights.map(({ Icon, eyebrow, title, text }) => (
          <Reveal className="highlight-card" key={eyebrow}>
            <Icon />
            <span className="eyebrow">{eyebrow}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
