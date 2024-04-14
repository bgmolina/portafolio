export const Technology = (props) => {
  const { name, src } = props;

  return (
    <figure className="flex h-16 w-44 items-center gap-x-2.5 rounded-lg border-[3px] border-solid border-tech pl-2.5">
      <img className="h-10 w-10" src={src} alt={name} />
      <figcaption className="text-xl font-medium text-white">{name}</figcaption>
    </figure>
  );
};
