export const Presentation = () => {
  const position = "<>Desarrollador Web</>";

  return (
    <section className="flex flex-col items-center">
      <div className="flex justify-center">
        <span className="text-3xl">👋</span>
        <p className="text-3xl text-white">Hola, soy</p>
      </div>
      <p className="text-6xl font-medium text-white">Braian</p>
      <p className="text-2xl font-semibold text-position">{position}</p>
    </section>
  );
};
