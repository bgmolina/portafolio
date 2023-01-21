import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { salir } from "../img";

export const SideBar = (props) => {
  const { showSideBar, onClickSideBar } = props;

  return (
    <>
      {createPortal(
        <AnimatePresence>
          {showSideBar && (
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "-100%",
              }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 left-0 z-20 flex h-screen w-screen flex-col bg-sidebar"
            >
              <figure className="flex w-full justify-end pr-5 pt-5">
                <img src={salir} onClick={onClickSideBar} />
              </figure>
              <div className="flex flex-col items-center gap-y-10 pt-5 text-4xl text-white">
                <span>Inicio</span>
                <span>Proyectos</span>
                <span>Habilidades</span>
                <span>Contacto</span>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>,
        document.getElementById("modalSidebar")
      )}
    </>
  );
};
