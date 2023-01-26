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
  const onClickSideBar = () => {
    setShowSideBar((prevState) => !prevState);
  }; //[menu mobile]

  const onClickModal = () => {
    setShowModal((prevState) => !prevState);
  }; //[card detalle mobile]

  //-------------
  //retorno datos
  //-------------
  return (
    <GlobalContext.Provider
      value={{ showModal, onClickModal, showSideBar, onClickSideBar }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
