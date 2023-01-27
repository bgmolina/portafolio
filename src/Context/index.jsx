import React, { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  //-------
  //estados
  //-------
  const [showSideBar, setShowSideBar] = React.useState(false); //[menu mobile]
  const [showModal, setShowModal] = React.useState(false); //[card detalle mobile]

  //---------
  //funciones
  //---------
  const activeDisableBodyScrollY = () => {
    const body = document.querySelector("body");

    !body.style.overflowY
      ? (body.style.overflowY = "hidden")
      : body.removeAttribute("style");
  };

  const onClickShowSideBar = () => {
    setShowSideBar((prevState) => !prevState);
    activeDisableBodyScrollY();
  }; //[menu mobile]

  const onClickShowModal = () => {
    setShowModal((prevState) => !prevState);
    activeDisableBodyScrollY();
  }; //[card detalle mobile]

  //-------------
  //retorno datos
  //-------------
  return (
    <GlobalContext.Provider
      value={{
        showModal,
        onClickShowModal,
        showSideBar,
        onClickShowSideBar,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
