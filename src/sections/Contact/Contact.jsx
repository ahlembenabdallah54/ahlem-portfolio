import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "../../components/Reveal";

export default function Contact() {
  return (
    <section className="contact section-wrap" id="contact">
      <Reveal className="contact-inner">
        <span className="eyebrow">05 — THE NEXT CHAPTER</span>
        <p className="contact-pretitle">
          Every interesting thing starts with a conversation.
        </p>
        <h2>Have a question,<br />an idea, or a <em>possibility?</em></h2>
        <p className="contact-description">
          I'm always interested in thoughtful collaborations, challenging
          problems and opportunities to build something meaningful.
        </p>
        <a className="button button-primary" href="mailto:YOUR_EMAIL@example.com">
          Start a conversation <ArrowUpRight size={16} />
        </a>
        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
          <a href="mailto:YOUR_EMAIL@example.com"><Mail size={17} /> Email</a>
        </div>
      </Reveal>
    </section>
  );
}
