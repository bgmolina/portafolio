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
      <img
        id="idMenu"
        onClick={onClickSideBar}
        src={menu}
        className="absolute pl-5 pt-5"
      />
      {showSideBar && <SideBar onClickSideBar={onClickSideBar} />}
    </>
  );
};
