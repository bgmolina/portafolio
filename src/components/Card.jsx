import { useContext } from "react";
import { GlobalContext } from "../Context";
import { getOrienBGImage } from "../utils";
import { eye } from "../img";
import "../styles/Card.css";

export const Card = (props) => {
  const { title, vertical, bgPreview, label, idCard } = props.data;

  //---------------
  // global context
  //---------------
  const { onClickShowModal, onClickDetailProject } = useContext(GlobalContext);

  return (
    <section className="h-48 w-2/4 min-w-72 cursor-pointer p-2.5 md:h-60 lg:w-2/6">
      {/* Background image */}
      <div
        onClick={() => {
          onClickShowModal();
          onClickDetailProject(props.data);
        }}
        id={idCard}
        className={`flex h-3/4 items-end rounded-t-2xl pl-2 pb-2 ${getOrienBGImage(
          vertical
        )} ${bgPreview}`}
      >
        {/* label */}
        <ul className="flex flex-col gap-2">
          {label.map((element, index) => (
            <li key={index} className={`rounded-full px-3 label-${element}`}>
              {element}
            </li>
          ))}
        </ul>
      </div>

      {/* Tittle */}
      <div className="flex h-1/4 items-center gap-x-2.5 rounded-b-2xl bg-tittleCard pl-2.5 text-white">
        <figure>
          <img src={eye} width={21} height={21} alt="eye" />
        </figure>
        <p className="flex h-full items-center text-xl">{title}</p>
      </div>
    </section>
  );
};
