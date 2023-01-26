import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { GlobalContext } from "../Context";

export const ProjectCard = () => {
  //global context
  const { showModal } = useContext(GlobalContext);

  return (
    <>
      {showModal &&
        createPortal(
          <section className="text-white">PRUEBA</section>,
          document.getElementById("modalProjectCard")
        )}
    </>
  );
};
