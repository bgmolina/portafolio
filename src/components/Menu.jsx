import { menu } from "../img";
import { SideBar } from "../modals";

export const Menu = () => {
  return (
    <>
      <img id="idMenu" src={menu} className="absolute pl-5 pt-5" />
      <SideBar />
    </>
  );
};
