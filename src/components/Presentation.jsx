import "../styles/Presentation.css";
import { monitor } from "../img";

export const Presentation = () => {
  const position = "<>Desarrollador Web</>";

  return (
    <section className="flex flex-col items-center pt-10">
      <div className="flex justify-center">
        <span
          className="text-3xl"
          style={{
            animationName: "greet",
            animationDuration: "3s",
            animationIterationCount: "infinite",
            transformOrigin: "80% 80%",
          }}
        >
          👋
        </span>
        <p className="text-3xl text-white">Hola, soy</p>
      </div>
      <p className="text-6xl font-medium text-white">Braian</p>
      <p className="pt-2.5 text-2xl font-semibold text-position">{position}</p>
      <img src={monitor} className="w-64 pt-10" />
    </section>
  );
};
