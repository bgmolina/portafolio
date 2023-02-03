import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { GlobalContext } from "../Context";
import { gitHub, www, salir } from "../img";
import "../styles/ProjectCard.css";

export const ProjectCard = () => {
  //---------------
  // global context
  //---------------
  const { showModal, onClickShowModal, detailProject, scrollStyle } =
    useContext(GlobalContext);

  //---------
  //funciones
  //---------
  const handleClick = (event) =>
    event.target.id === "modalCardDetail" && onClickShowModal();

  return createPortal(
    <AnimatePresence>
      {showModal && (
        <section
          id="modalCardDetail"
          onClick={handleClick}
          className="fixed top-0 z-30 flex h-screen w-screen flex-col items-center justify-end bg-black bg-opacity-50 md:justify-center md:px-5"
        >
          {/* cierra modal */}
          <section
            onClick={onClickShowModal}
            className="flex h-full w-full md:hidden"
          ></section>

          {/* modal info */}
          <motion.section
            initial={{ y: "100%" }}
            animate={{
              y: 0,
            }}
            exit={{
              y: "100%",
            }}
            transition={{ type: "just", bounce: 0, duration: 0.3 }}
            className="flex w-full flex-col gap-5 rounded-t-xl bg-sidebar pb-16 text-white md:max-w-3xl md:rounded-b-xl md:pt-5"
          >
            {/* button close modal */}
            <button
              onClick={onClickShowModal}
              className="hidden md:absolute md:right-5 md:flex md:h-10 md:w-10 md:items-center md:justify-center md:rounded-full md:bg-tittleCard"
            >
              <img src={salir} />
            </button>
            {/* images */}
            <div className="flex flex-col gap-2.5">
              {/* line top modal */}
              <div className="flex h-5 w-full items-center justify-center md:hidden">
                <span className="h-1 w-20 rounded-full bg-slate-300"></span>
              </div>

              {/* images */}
              <section
                className={`flex h-52 w-full flex-col flex-wrap pb-2.5 md:h-80 ${scrollStyle}`}
              >
                {detailProject.bgImages.map((bgImage, index) => (
                  <div
                    key={index}
                    className={`flex h-full w-full ${bgImage} bg-contain bg-center bg-no-repeat`}
                  ></div>
                ))}
              </section>
            </div>

            {/* info project */}
            <article className="px-5">
              <h1 className="text-center text-xl font-medium">
                {detailProject.title}
              </h1>
              <p className="text-center line-clamp-2">
                {detailProject.description}
              </p>
            </article>

            {/* buttons */}
            <section className="flex flex-col gap-2.5 px-5 md:flex-row md:justify-center">
              {detailProject.demo && (
                <a
                  href={detailProject.demo}
                  target="_blank"
                  className="buttonDetaiProject"
                >
                  <img width={26} height={26} src={www} alt="Pagina web" />
                  Demo
                </a>
              )}
              <a
                href={detailProject.repository}
                target="_blank"
                className="buttonDetaiProject"
              >
                <img width={26} height={26} src={gitHub} alt="GitHub" />
                Repositorio
              </a>
            </section>
          </motion.section>
        </section>
      )}
    </AnimatePresence>,
    document.getElementById("modalProjectCard")
  );
};
