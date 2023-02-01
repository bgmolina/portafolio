import React, { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  //---------
  //variables
  //---------
  const scrollStyle =
    "overflow-x-scroll overscroll-x-contain whitespace-nowrap scrollbar-thin scrollbar-track-scrollBG scrollbar-thumb-scrollLine scrollbar-track-rounded-full scrollbar-thumb-rounded-full";
  const dataProjects = [
    {
      title: "Buzón de correo",
      description:
        "Sitio para leer cada correo recibido por usuario desde el BackEnd",
      vertical: false,
      bgPreview: "bg-mailboxPreview",
      bgImages: ["bg-mailboxDesktop", "bg-mailboxMobile", "bg-mailboxJson"],
      repository: "https://github.com/bmolina1993/mailbox",
      demo: "https://bmolina1993.github.io/mailbox/",
    },
    {
      title: "Viajes",
      description: "Sitio de alquiler",
      vertical: false,
      bgPreview: "bg-travelPreview",
      bgImages: ["bg-travelDesktop", "bg-travelMobile"],
      repository: "https://github.com/bmolina1993/travel",
      demo: "https://bmolina1993.github.io/travel/index.4906e77435b13bfc22e6.html",
    },
    {
      title: "To do list",
      description: "Sitio para cargar tareas pendientes",
      vertical: true,
      bgPreview: "bg-todoListPreview",
      bgImages: ["bg-todoListMobile"],
      repository: "https://github.com/bmolina1993/todoReact",
      demo: "https://bmolina1993.github.io/todoReact/",
    },
    {
      title: "Datos inmobiliarios",
      description:
        "Web scraping para extraer datos de sitio y exportarlo en Json/PostgreSQL",
      vertical: true,
      bgPreview: "bg-realEstatePreview",
      bgImages: ["bg-realEstatePreview"],
      repository: "https://github.com/bmolina1993/real-estate-visualization",
      demo: null,
    },
  ];
  const defaultDetailProject = {
    title: null,
    description: null,
    vertical: false,
    bgPreview: null,
    bgImages: [],
    repository: null,
    demo: null,
  };

  //-------
  //estados
  //-------
  const [detailProject, setDetailProject] =
    React.useState(defaultDetailProject); //[detail project]
  const [showSideBar, setShowSideBar] = React.useState(false); //[menu mobile]
  const [showModal, setShowModal] = React.useState(false); //[card detalle mobile]

  const defaultData = {
    availHeight: null,
    availLeft: null,
    availTop: null,
    availWidth: null,
    colorDepth: null,
    height: null,
    isExtended: false,
    pixelDepth: null,
    width: null,
  };
  const [pruebaScreen, setPruebaScreen] = React.useState(defaultData); //[PRUEBA] [x]

  //---------
  //funciones
  //---------
  const activeDisableBodyScrollY = (event) => {
    const body = document.querySelector("body");
    const screen = event.view.screen;

    //console.log(event.view.screen);
    setPruebaScreen({
      availHeight: screen.availHeight,
      availLeft: screen.availLeft,
      availTop: screen.availTop,
      availWidth: screen.availWidth,
      colorDepth: screen.colorDepth,
      height: screen.height,
      isExtended: screen.isExtended,
      pixelDepth: screen.pixelDepth,
      width: screen.width,
    }); //[x]

    !body.style.overflowY
      ? (body.style.overflowY = "hidden")
      : body.removeAttribute("style");
  };

  const onClickShowSideBar = () => {
    setShowSideBar((prevState) => !prevState);
    activeDisableBodyScrollY();
  }; //[menu mobile]

  const onClickShowModal = (event) => {
    setShowModal((prevState) => !prevState);
    activeDisableBodyScrollY(event);
  }; //[card detalle mobile]

  const onClickDetailProject = (data) => {
    setDetailProject({
      title: data.title,
      description: data.description,
      vertical: data.vertical,
      bgPreview: data.bgPreview,
      bgImages: data.bgImages,
      repository: data.repository,
      demo: data.demo,
    });
  };

  //-------------
  //retorno datos
  //-------------
  return (
    <GlobalContext.Provider
      value={{
        scrollStyle,
        dataProjects,
        detailProject,
        setDetailProject,
        onClickDetailProject,
        showModal,
        onClickShowModal,
        showSideBar,
        onClickShowSideBar,
        pruebaScreen, //[x]
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
