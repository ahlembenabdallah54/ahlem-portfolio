
import { useState } from "react";
import {
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  RotateCcw,
  MousePointerClick,
} from "lucide-react";

import SectionHeading from "../../components/SectionHeading";
import Reveal from "../../components/Reveal";
import "./Expertise.css";

const skillIcons = [
  BrainCircuit,
  Database,
  Code2,
  Layers3,
];

export default function Expertise({ skills = [] }) {
  const [flippedCards, setFlippedCards] = useState([]);

  const toggleCard = (index) => {
    setFlippedCards((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index]
    );
  };

  return (
    <section className="expertise section-wrap" id="expertise">

      {/* SECTION HEADING */}
      <SectionHeading
        eyebrow="02 — THE MIND"
        title={
          <>
            Different disciplines.
            <br />
            <em>One connected curiosity.</em>
          </>
        }
        note="I enjoy moving between analytical thinking, intelligent systems and the engineering that brings them to life."
      />

      {/* INTERACTIVE SKILL CARDS */}
      <div className="skills-grid">

        {skills.map((group, index) => {
          const Icon = skillIcons[index] || Layers3;
          const isFlipped = flippedCards.includes(index);

          return (
            <Reveal
              className="skill-card"
              key={group.name}
            >
              <button
                type="button"
                className={`flip-card ${
                  isFlipped ? "is-flipped" : ""
                }`}
                onClick={() => toggleCard(index)}
                aria-pressed={isFlipped}
                aria-label={`${
                  isFlipped ? "Return to" : "Explore"
                } ${group.name} skills`}
              >

                <span className="flip-card-inner">

                  {/* FRONT SIDE */}
                  <span className="flip-card-face flip-card-front">

                    <span className="card-topline">
                      <span className="skill-number">
                        0{index + 1}
                      </span>

                      <span className="card-action">
                        <MousePointerClick size={16} />
                      </span>
                    </span>

                    <span className="skill-icon">
                      <Icon size={25} />
                    </span>

                    <span className="skill-card-title">
                      {group.name}
                    </span>

                    <span className="card-explore">
                      EXPLORE MY SKILLS
                      <span>↗</span>
                    </span>

                  </span>

                  {/* BACK SIDE */}
                  <span className="flip-card-face flip-card-back">

                    <span className="card-topline">
                      <span className="skill-number">
                        0{index + 1} / EXPERTISE
                      </span>

                      <RotateCcw size={17} />
                    </span>

                    <span className="back-heading">
                      {group.name}
                    </span>

                    <span className="skill-tags">

                      {group.items.map((item) => (
                        <span
                          className="skill-tag"
                          key={item}
                        >
                          {item}
                        </span>
                      ))}

                    </span>

                    <span className="card-return">
                      <RotateCcw size={13} />
                      CLICK TO RETURN
                    </span>

                  </span>

                </span>
              </button>
            </Reveal>
          );
        })}

      </div>

      {/* FOOTNOTE */}
      <p className="skills-footnote">
        A growing toolkit — always learning, testing and connecting new ideas.
      </p>

    </section>
  );
}
