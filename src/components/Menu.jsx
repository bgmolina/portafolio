import React, { useContext } from "react";
import { menu } from "../img";
import { SideBar } from "../modals";
import { GlobalContext } from "../Context";

export const Menu = () => {
  //---------------
  // global context
  //---------------
  const { onClickShowSideBar } = useContext(GlobalContext);

  return (
    <>
      <figure className="w-full pl-5 pt-5 md:hidden">
        <img
          id="idMenu"
          onClick={onClickShowSideBar}
          src={menu}
          width={30}
          height={20}
          alt="menu"
        />
      </figure>
      <SideBar />
    </>
  );
};
