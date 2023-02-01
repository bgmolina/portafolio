import React, { useContext } from "react";
import { Card, Tittle } from "../components";
import { ProjectCard } from "../modals";
import { GlobalContext } from "../Context";

export const Projects = () => {
  //---------------
  // global context
  //---------------
  const { scrollStyle, dataProjects } = useContext(GlobalContext);

  return (
    <>
      {/* Tittle */}
      <Tittle idValue="idProjects" value="Proyectos" />

      {/* Cards */}
      <section className={"flex w-full justify-center px-5"}>
        <section
          className={`flex h-96 w-full max-w-xl flex-col flex-wrap items-center overflow-hidden md:h-120 md:max-w-3xl lg:max-w-5xl ${scrollStyle}`}
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
