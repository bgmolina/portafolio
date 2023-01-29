import React from "react";
import { Card, Tittle } from "../components";
import { ProjectCard } from "../modals";

export const Projects = () => {
  //pasar a global
  const dataProjects = [
    {
      title: "Buzón de correo",
      description:
        "Sitio para leer cada correo recibido por usuario desde el BackEnd",
      vertical: false,
      bgPreview: "bg-mailboxPreview",
      bgImages: [
        "bg-mailboxDesktopGif",
        "mailboxMobileGif",
        "bg-mailboxDesktop",
        "bg-mailboxMobile",
        "bg-mailboxJson",
      ],
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
      bgImages: ["bg-todoListMobile", "bg-todoListMobileGif"],
      repository: "https://github.com/bmolina1993/todoReact",
      demo: "https://bmolina1993.github.io/todoReact/",
    },
    {
      title: "Datos inmobiliarios",
      description:
        "Web scraping para extraer datos de sitio y exportarlo en Json/PostgreSQL",
      vertical: true,
      bgPreview: "bg-realEstatePreview",
      bgImages: [],
      repository: "https://github.com/bmolina1993/real-estate-visualization",
      demo: null,
    },
  ];

  return (
    <>
      {/* Tittle */}
      <Tittle idValue="idProjects" value="Proyectos" />

      {/* Cards */}
      <section className={`flex w-full justify-center px-5`}>
        <section
          className={`flex h-80 w-full max-w-lg flex-col flex-wrap items-center gap-2.5 overflow-hidden overflow-x-scroll`}
        >
          <Card tittle="Buzón de correo" cardImage={1} vertical={false} />
          <Card tittle="Viajes" cardImage={2} vertical={false} />
          <Card tittle="To do list" cardImage={3} vertical={true} />
          <Card tittle="Datos inmobiliarios" cardImage={4} vertical={true} />
        </section>
      </section>

      {/* modal */}
      <ProjectCard />
    </>
  );
};
