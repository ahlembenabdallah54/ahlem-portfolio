import { motion } from "framer-motion";
import "./Hero.css";
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Heart,
  Layers3,
  Sparkles,
  Trophy,
} from "lucide-react";

const techCards = [
  { className: "tech-ai", Icon: BrainCircuit, label: "AI & LLMs", y: -9, duration: 5 },
  { className: "tech-data", Icon: Database, label: "Data Science", y: 8, duration: 5.5 },
  { className: "tech-rag", Icon: Layers3, label: "RAG & Agents", y: -8, duration: 6 },
  { className: "tech-development", Icon: Code2, label: "Development", y: 7, duration: 5.2 },
  { className: "tech-analytics", Icon: Sparkles, label: "Analytics", y: -7, duration: 5.8 },
];

const achievements = [
  { Icon: GraduationCap, title: "Master's Student", description: "Data Science · FSEG Tunis" },
  { Icon: Code2, title: "AI & Data Projects", description: "From ideas to implementation" },
  { Icon: Trophy, title: "Hackathon Winner", description: "1st Place · Zero Gachi" },
  { Icon: Heart, title: "Driven by Impact", description: "Building useful and meaningful solutions" },
];

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-grid" />

      {/* Picture AND floating cards live in the same box (.hero-scene),
          so the cards always stay on the woman. */}
      <motion.div
        className="hero-art hero-avatar"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="hero-scene">
          <img
            src="/images/ahlem-avatar-hero.png"
            alt="Illustration of Ahlem in her creative AI and Data Science workspace"
            className="hero-avatar-image"
          />

          <div className="hero-floating-cards">
            {techCards.map(({ className, Icon, label, y, duration }) => (
              <motion.div
                key={className}
                className={`tech-card ${className}`}
                animate={{ y: [0, y, 0] }}
                transition={{ duration, repeat: Infinity }}
              >
                <Icon />
                <span>{label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="avatar-glow" />
      </motion.div>

      <div className="hero-copy">
        <motion.div
          className="availability"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="status-dot" />
          OPEN TO MEANINGFUL OPPORTUNITIES
        </motion.div>

        <motion.p
          className="hero-kicker"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          A curious mind. A builder's heart.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
        >
          <span className="hero-first-name">Ahlem</span>
          <em className="hero-surname">Ben Abdallah.</em>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
        >
          I explore the space between{" "}
          <strong>data, intelligence and imagination</strong> — turning
          questions into ideas, and ideas into things people can use.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <a className="button button-primary" href="#work">
            Explore my work <ArrowUpRight size={16} />
          </a>
          <a className="text-link" href="#story">
            Get to know me <ArrowDown size={15} />
          </a>
        </motion.div>
      </div>

      <div className="achievement-strip hero-achievements">
        {achievements.map(({ Icon, title, description }) => (
          <div className="achievement-item" key={title}>
            <div className="achievement-icon"><Icon /></div>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-line" />
        <span>01 / 06</span>
      </div>
    </section>
  );
}