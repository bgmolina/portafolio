import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { GlobalContext } from "../Context";

export const ProjectCard = () => {
  //---------------
  // global context
  //---------------
  const { showModal, onClickShowModal } = useContext(GlobalContext);

  return createPortal(
    <AnimatePresence>
      {showModal && (
        <section
          onClick={onClickShowModal}
          className="fixed top-0 z-30 flex h-screen w-screen flex-col items-center justify-end bg-black bg-opacity-50"
        >
          <motion.section
            initial={{ y: "100%" }}
            animate={{
              y: 0,
            }}
            exit={{
              y: "100%",
            }}
            transition={{ type: "just", bounce: 0, duration: 0.3 }}
            className="flex w-full flex-col gap-5 rounded-t-xl bg-sidebar pb-5 text-white"
          >
            <div className="flex flex-col gap-2.5">
              {/* line top modal */}
              <div className="flex h-5 w-full items-center justify-center">
                <span className="h-1 w-20 rounded-full bg-slate-300"></span>
              </div>
              {/* images */}
              <figure className="h-40 w-full bg-teal-700"></figure>
            </div>

            {/* info project */}
            <article className="px-5">
              <h1 className="text-center text-xl font-medium">
                Buzón de correo
              </h1>
              <p className="line-clamp-2">
                Diseño responsivo para leer cada correo recibido por usuario
                desde el BackEnd
              </p>
            </article>
          </motion.section>
        </section>
      )}
    </AnimatePresence>,
    document.getElementById("modalProjectCard")
  );
};
