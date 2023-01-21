import { createPortal } from "react-dom";
import "../styles/SideBar.css";

export const SideBar = () => {
  return (
    <>
      {createPortal(
        <section>PRUEBA MODAL</section>,
        document.getElementById("modalSidebar")
      )}
    </>
  );
};
