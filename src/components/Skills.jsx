import { useContext } from "react";
import { GlobalContext } from "../Context";
import { Tittle, Technology } from "../components";
import {
  docker,
  git,
  figma,
  nodeJs,
  html,
  css,
  tailwindcss,
  javascript,
  typeScript,
  reactJs,
  vue,
  nestJs,
  mongodb,
  mssql,
  postgresql,
  kubernetes,
  bash,
  sequelize,
  redis,
  mysql,
} from "../img";

export const Skills = () => {
  //---------------
  // global context
  //---------------
  const { scrollStyle } = useContext(GlobalContext);

  return (
    <>
      <Tittle idValue="idSkills" value="Habilidades" />

      {/* habilidades */}
      <section className={`flex w-full justify-center px-5`}>
        <section
          className={`flex h-80 w-full max-w-3xl flex-col flex-wrap content-start items-center gap-2.5 overflow-hidden ${scrollStyle}`}
        >
          <Technology name="Docker" src={docker} />
          <Technology name="Kubernetes" src={kubernetes} />
          <Technology name="Git" src={git} />
          <Technology name="Figma" src={figma} />
          <Technology name="React" src={reactJs} />
          <Technology name="TailwindCSS" src={tailwindcss} />
          <Technology name="Node.Js" src={nodeJs} />
          <Technology name="JavaScript" src={javascript} />
          <Technology name="TipeScript" src={typeScript} />
          <Technology name="Sequelize" src={sequelize} />
          <Technology name="Redis" src={redis} />
          <Technology name="Bash" src={bash} />
          <Technology name="MongoDB" src={mongodb} />
          <Technology name="MSSQL" src={mssql} />
          <Technology name="PostgreSQL" src={postgresql} />
          <Technology name="MySQL" src={mysql} />
        </section>
      </section>
    </>
  );
};
