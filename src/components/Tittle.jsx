export const Tittle = (props) => {
  const { idValue, value } = props;

  return (
    <section
      id={idValue}
      className="flex flex-col items-center gap-y-2 pt-10 pb-5"
    >
      <p className="text-4xl text-white">{value}</p>
      <span className="h-2.5 w-32 rounded-full bg-barTittle drop-shadow-barTittle"></span>
    </section>
  );
};
