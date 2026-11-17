import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Footer() {
  const [secretOpen, setSecretOpen] = useState(false);

  return (
    <>
      <footer className="footer section-wrap">
        <a className="wordmark" href="#home">A<span>.</span></a>
        <span>Designed with curiosity. Built with intention.</span>
        <button
          className="secret-trigger"
          onClick={() => setSecretOpen((open) => !open)}
          aria-label="Open a little surprise"
        >
          <Sparkles size={16} />
        </button>
      </footer>

      <AnimatePresence>
        {secretOpen && (
          <motion.div
            className="secret-toast"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
          >
            You found the little detail. Stay curious. ✨
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
