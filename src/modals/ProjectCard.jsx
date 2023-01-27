import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { GlobalContext } from "../Context";

export const ProjectCard = () => {
  //global context
  const { showModal } = useContext(GlobalContext);

  return createPortal(
    <AnimatePresence>
      {showModal && (
        <section className="fixed top-0 z-30 flex h-screen w-screen flex-col items-center justify-end bg-black bg-opacity-50">
          <motion.section
            initial={{ y: "100%" }}
            animate={{
              y: 0,
            }}
            exit={{
              y: "100%",
            }}
            transition={{ type: "just", bounce: 0, duration: 0.3 }}
            className="flex h-52 w-52 bg-emerald-500 text-white"
          >
            PRUEBA
          </motion.section>
        </section>
      )}
    </AnimatePresence>,
    document.getElementById("modalProjectCard")
  );
};
