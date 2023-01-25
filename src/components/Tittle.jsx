export const Tittle = (props) => {
  return (
    <section className="flex flex-col items-center gap-y-2 pt-10 pb-5">
      <p className="text-4xl text-white">{props.value}</p>
      <span className="h-2.5 w-32 rounded-full bg-barTittle drop-shadow-barTittle"></span>
    </section>
  );
};
