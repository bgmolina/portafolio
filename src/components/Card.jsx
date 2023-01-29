import { useContext } from "react";
import { GlobalContext } from "../Context";
import { getOrienBGImage } from "../utils";
import { eye } from "../img";

export const Card = (props) => {
  const { title, vertical, bgPreview } = props.data;

  //---------------
  // global context
  //---------------
  const { onClickShowModal, onClickDetailProject } = useContext(GlobalContext);

  return (
    <section className="h-36 w-60">
      {/* Background image */}
      <div
        onClick={() => {
          onClickShowModal();
          onClickDetailProject(props.data);
        }}
        className={`h-3/4 rounded-t-2xl ${getOrienBGImage(
          vertical
        )} ${bgPreview}`}
      ></div>

      {/* Tittle */}
      <div className="flex h-1/4 items-center gap-x-2.5 rounded-b-2xl bg-tittleCard pl-2.5 text-white">
        <figure>
          <img src={eye} />
        </figure>
        <p className="h-full text-xl">{title}</p>
      </div>
    </section>
  );
};
