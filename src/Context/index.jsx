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
      demo: "https://mailbox.bgma.tech",
      label: ["FrontEnd", "Kubernetes", "Docker"],
      order: 2,
    },
    {
      title: "Viajes",
      description: "Sitio de alquiler",
      vertical: false,
      bgPreview: "bg-travelPreview",
      bgImages: ["bg-travelDesktop", "bg-travelMobile"],
      repository: "https://github.com/bmolina1993/travel",
      demo: "https://travel.bgma.tech",
      label: ["FrontEnd", "Kubernetes", "Docker"],
      order: 3,
    },
    {
      title: "To do list",
      description: "Sitio para cargar tareas pendientes",
      vertical: true,
      bgPreview: "bg-todoListPreview",
      bgImages: ["bg-todoListMobile"],
      repository: "https://github.com/bmolina1993/todoReact",
      demo: "https://todolist.bgma.tech",
      label: ["FrontEnd", "Kubernetes", "Docker"],
      order: 5,
    },
    {
      title: "Portafolio Web",
      description: "Web de proyectos desarrollados",
      vertical: false,
      bgPreview: "bg-portafolioPreview",
      bgImages: [
        "bg-portafolioDesktop",
        "bg-portafolioMobile",
        "bg-portafolioTablet",
      ],
      repository: "https://github.com/bmolina1993/portafolio",
      demo: "https://bgma.tech/",
      label: ["FrontEnd", "Kubernetes", "Docker"],
      order: 4,
    },
    // {
    //   title: "Datos inmobiliarios",
    //   description:
    //     "Web scraping para extraer datos de sitio y exportarlo en Json/PostgreSQL",
    //   vertical: true,
    //   bgPreview: "bg-realEstatePreview",
    //   bgImages: ["bg-realEstatePreview"],
    //   repository: "https://github.com/bmolina1993/real-estate-visualization",
    //   demo: null,
    //   label: "BackEnd",
    // },
    {
      title: "WordPress y MySQL",
      description:
        "Apliación en Kubernetes con base de datos (volumen persistente)",
      vertical: false,
      bgPreview: "bg-wpHomePreview",
      bgImages: ["bg-wpHomeDesktop","bg-wpBashDesktop","bg-wpK8sDesktop","bg-wpDbK8sDesktop"],
      repository: "https://github.com/bmolina1993/k8s-wordpress-mysql",
      demo: null,
      label: ["Kubernetes"],
      order: 1,
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
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
