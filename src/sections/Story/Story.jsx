import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  Sparkles,
} from "lucide-react";
import "./Story.css";

const interests = [
  { Icon: BrainCircuit, label: "Artificial Intelligence" },
  { Icon: Database, label: "Data Science" },
  { Icon: Code2, label: "Full-Stack Development" },
  { Icon: Sparkles, label: "Agentic AI & Innovation" },
];

export default function Story({ milestones = [] }) {
  return (
    <section className="story-section section-wrap" id="story">

      <div className="story-heading">
        <span className="section-eyebrow">
          02 — THE PERSON BEHIND THE CODE
        </span>

        <h2>
          More than a passion
          <br />
          <em>for technology.</em>
        </h2>
      </div>

      <div className="story-layout">

        {/* REAL PHOTO */}
        <motion.div
          className="story-photo-column"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="story-photo-frame">
           <img
  src="/images/ahlem-real-photo.jpeg"
  alt="Ahlem Ben Abdallah"
  className="story-photo"
  onError={(e) => {
    console.error("Could not load Ahlem's photo:", e.currentTarget.src);
  }}
/>

            <div className="story-photo-overlay" />

            <div className="story-photo-caption">
              <span>THE PERSON BEHIND THE IDEAS</span>
              <h3>Ahlem Ben Abdallah.</h3>
            </div>
          </div>

          <div className="story-photo-decoration">
            <span>CURIOUS BY NATURE.</span>
            <span>CREATIVE BY DESIGN.</span>
          </div>
        </motion.div>

        {/* INTRODUCTION */}
        <motion.div
          className="story-content"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <span className="story-greeting">HELLO, I'M AHLEM 👋</span>

          <h3>
            A Data Science student with a mind full of ideas
            and a passion for building things that matter.
          </h3>

          <p>
            My journey started with Business Intelligence,
            where I discovered how data can reveal insights
            and support better decisions.
          </p>

          <p>
            Today, I'm pursuing a Professional Master's degree
            in Information Systems Engineering & Data Science
            at FSEG Tunis, exploring the fascinating world of
            Artificial Intelligence, Large Language Models
            and intelligent systems.
          </p>

          <p>
            I love moving beyond theory — experimenting with
            technologies, developing applications, participating
            in challenges and transforming ideas into practical
            solutions.
          </p>

          <div className="story-quote">
            <span>✳</span>
            "I believe the best ideas are the ones we bring to life."
          </div>

          <div className="story-interests">
            {interests.map(({ Icon, label }) => (
              <div className="story-interest" key={label}>
                <Icon size={17} />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="story-link">
            Let's connect <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>

      {/* PROFESSIONAL JOURNEY */}
      {Array.isArray(milestones) && milestones.length > 0 && (
        <div className="story-milestones">
          <div className="story-milestones-heading">
            <span className="section-eyebrow">THE JOURNEY SO FAR</span>
            <h3>Every step shapes the story.</h3>
          </div>

          <div className="story-timeline">
            {milestones.map((item, index) => (
              <div
  className="story-timeline-item"key={index}tabIndex={0}>
                <span className="timeline-dot" />

                <div>
                  <span className="timeline-date">
                    {item.date || item.year || item.period}
                  </span>

                  <h4>
                    {item.title || item.role || item.degree}
                  </h4>

                  <span className="timeline-company">
                    {item.organization ||
                      item.company ||
                      item.institution}
                  </span>

                  <p>{item.description || item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
}