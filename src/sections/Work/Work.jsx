import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  Sparkles,
  X,
} from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import Reveal from "../../components/Reveal";

function ProjectVisual({ number }) {
  const Icon =
    number === "01" ? Sparkles :
    number === "02" ? BrainCircuit :
    number === "03" ? Layers3 :
    number === "04" ? Database :
    number === "05" ? ArrowRight : Code2;

  return (
    <div className="project-visual">
      <div className="visual-ring ring-one" />
      <div className="visual-ring ring-two" />
      <span className="visual-symbol"><Icon /></span>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="project-modal"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close project details">
              <X />
            </button>
            <span className="eyebrow">{project.number} — {project.category}</span>
            <h2>{project.title}</h2>
            <span className="project-status">{project.status}</span>
            <p>{project.details}</p>
            <div className="project-tags">
              {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <p className="modal-hint">
              Project links and detailed case studies can be added when the corresponding material is ready.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Work({ projects }) {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="work section-wrap" id="work">
      <SectionHeading
        eyebrow="03 — THE CREATIONS"
        title={<>Ideas deserve to be<br /><em>made real.</em></>}
        note="A selection of projects across machine learning, generative AI, data science and full-stack development. Select a project to explore its story."
      />

      <div className="project-grid">
        {projects.map((project) => (
          <Reveal className={`project-card accent-${project.accent}`} key={project.number}>
            <div className="project-top">
              <span>{project.number} / PROJECT</span>
              <span className="project-status">{project.status}</span>
            </div>
            <ProjectVisual number={project.number} />
            <span className="eyebrow">{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-footer">
              <div className="project-tags">
                {project.stack.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <button
                className="round-arrow"
                onClick={() => setActiveProject(project)}
                aria-label={`Explore ${project.title}`}
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
