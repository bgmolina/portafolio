import { createPortal } from "react-dom";
import "../styles/SideBar.css";
import { salir } from "../img";

export const SideBar = (props) => {
  const { onClickSideBar } = props;

  return (
    <>
      {createPortal(
        <section className="absolute top-0 z-20 flex h-screen w-screen flex-col bg-sidebar">
          <img
            src={salir}
            onClick={onClickSideBar}
            className="mt-5 ml-5 h-5 w-5"
          />
          <div className="flex flex-col items-center gap-y-10 pt-5 text-4xl text-white">
            <span>Inicio</span>
            <span>Proyectos</span>
            <span>Habilidades</span>
            <span>Contacto</span>
          </div>
        </section>,
        document.getElementById("modalSidebar")
      )}
    </>
  );
};
