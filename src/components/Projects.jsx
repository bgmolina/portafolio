import { Card } from "../components";

export const Projects = () => {
  return (
    <>
      {/* Tittle */}
      <section className="flex flex-col items-center gap-y-2 pt-10 pb-5">
        <p className="text-4xl text-white">Proyectos</p>
        <span className="h-2.5 w-32 rounded-full bg-barTittle drop-shadow-barTittle"></span>
      </section>

      {/* Cards */}
      {/* <section className="flex flex-wrap justify-center gap-2.5"> */}
      <section className="mx-auto flex h-[298px] w-[280px] flex-col flex-wrap gap-2.5 overflow-hidden overflow-x-scroll">
        <Card tittle="Buzón de correo" cardImage={1} vertical={false} />
        <Card tittle="Viajes" cardImage={2} vertical={false} />
        <Card tittle="To do list" cardImage={3} vertical={true} />
        <Card tittle="Datos inmobiliarios" cardImage={4} vertical={true} />
      </section>
    </>
  );
};
