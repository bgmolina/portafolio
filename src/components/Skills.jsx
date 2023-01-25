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
} from "../img";

export const Skills = () => {
  return (
    <>
      <Tittle value="Habilidades" />

      {/* habilidades */}
      <section className={`flex w-full justify-center px-5`}>
        <section className="flex h-80 w-full max-w-3xl flex-col flex-wrap content-start items-center gap-2.5 overflow-hidden overflow-x-scroll">
          <Technology name="Docker" src={docker} />
          <Technology name="Git" src={git} />
          <Technology name="Figma" src={figma} />
          <Technology name="Node.Js" src={nodeJs} />
          <Technology name="HTML 5" src={html} />
          <Technology name="CSS 3" src={css} />
          <Technology name="TailwindCSS" src={tailwindcss} />
          <Technology name="JavaScript" src={javascript} />
          <Technology name="TipeScript" src={typeScript} />
          <Technology name="React" src={reactJs} />
          <Technology name="Vue" src={vue} />
          <Technology name="Nest.Js" src={nestJs} />
          <Technology name="MongoDB" src={mongodb} />
          <Technology name="MSSQL" src={mssql} />
          <Technology name="PostgreSQL" src={postgresql} />
        </section>
      </section>
    </>
  );
};
