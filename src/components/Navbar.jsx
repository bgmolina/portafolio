import { motion } from "framer-motion";
import "../styles/Navbar.css";

export const Navbar = () => {
  //---------
  //variables
  //---------
  const hoverButton = {
    hover: {
      backgroundColor: "#2C66C3",
      transition: {
        ease: "easeInOut",
        duration: 0.2,
        type: "tween",
      },
    },
  };

  return (
    <header className="hidden md:flex md:justify-end md:p-5">
      <nav className="flex gap-2.5 text-xl text-white">
        <motion.a
          id="idBtnProjects"
          variants={hoverButton}
          whileHover="hover"
          href="#idProjects"
          className="titleHeader"
        >
          Proyectos
        </motion.a>
        <motion.a
          id="idBtnSkills"
          variants={hoverButton}
          whileHover="hover"
          href="#idSkills"
          className="titleHeader"
        >
          Habilidades
        </motion.a>
        <motion.a
          id="idBtnContact"
          variants={hoverButton}
          whileHover="hover"
          href="#idContact"
          className="titleHeader"
        >
          Contacto
        </motion.a>
      </nav>
    </header>
  );
};
