import React, { useContext } from "react";
import { Card, Tittle } from "../components";
import { ProjectCard } from "../modals";
import { GlobalContext } from "../Context";

export const Projects = () => {
  //---------------
  // global context
  //---------------
  const { dataProjects } = useContext(GlobalContext);

  return (
    <>
      {/* Tittle */}
      <Tittle idValue="idProjects" value="Proyectos" />

      {/* Cards */}
      <section className={`flex w-full justify-center px-5`}>
        <section
          className={`flex h-80 w-full max-w-lg flex-col flex-wrap items-center overflow-hidden overflow-x-scroll md:h-104 md:max-w-3xl`}
        >
          {dataProjects.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </section>
      </section>

      {/* modal */}
      <ProjectCard />
    </>
  );
};
