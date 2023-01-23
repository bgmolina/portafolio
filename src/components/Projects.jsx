import { Card } from "../components";

export const Projects = () => {
  // ----------------------
  // medidas <Card/> mobile
  // ----------------------
  /*
    h-[18.625rem] = (h-36 * 2) + gap-2.5
    w-[calc(100%-2.5rem)] = gap-10 (20px padding-left/right)
    max-w-[30.625rem] = (w-60 * 2) + gap-2.5
  */

  return (
    <>
      {/* Tittle */}
      <section className="flex flex-col items-center gap-y-2 pt-10 pb-5">
        <p className="text-4xl text-white">Proyectos</p>
        <span className="h-2.5 w-32 rounded-full bg-barTittle drop-shadow-barTittle"></span>
      </section>

      {/* Cards */}
      <section
        className={`mx-auto flex h-[18.625rem] w-[calc(100%-2.5rem)] max-w-[30.625rem] flex-col flex-wrap gap-2.5 overflow-hidden overflow-x-scroll`}
      >
        <Card tittle="Buzón de correo" cardImage={1} vertical={false} />
        <Card tittle="Viajes" cardImage={2} vertical={false} />
        <Card tittle="To do list" cardImage={3} vertical={true} />
        <Card tittle="Datos inmobiliarios" cardImage={4} vertical={true} />

        <Card tittle="To do list" cardImage={3} vertical={true} />
        <Card tittle="Datos inmobiliarios" cardImage={4} vertical={true} />
      </section>
    </>
  );
};
