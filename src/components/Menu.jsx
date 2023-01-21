import React from "react";
import { menu } from "../img";
import { SideBar } from "../modals";

export const Menu = () => {
  //-------
  //estados
  //-------
  const [showSideBar, setShowSideBar] = React.useState(false);

  //---------
  //funciones
  //---------
  const onClickSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <>
      <figure className="w-full pl-5 pt-5">
        <img id="idMenu" onClick={onClickSideBar} src={menu} />
      </figure>
      <SideBar showSideBar={showSideBar} onClickSideBar={onClickSideBar} />
    </>
  );
};
