import { Tittle } from "../components";
import { linkedin, gitHub, outlook } from "../img";
import "../styles/Contact.css";

export const Contact = () => {
  return (
    <>
      <Tittle value="Contacto" />

      <section className="flex flex-row justify-center gap-x-5">
        <figure className="contactIcon">
          <a
            href="https://www.linkedin.com/in/braian-gabriel-molina/"
            target="_blank"
            rel="linkedin"
          >
            <img src={linkedin} />
          </a>
        </figure>

        <figure className="contactIcon">
          <a href="https://github.com/bmolina1993" target="_blank" rel="github">
            <img src={gitHub} />
          </a>
        </figure>

        <figure className="contactIcon">
          <a
            href="mailto:braian_gabriel_1993@hotmail.com?Subject=[Portafolio] - Contacto"
            target="_blank"
            rel="correo"
          >
            <img src={outlook} />
          </a>
        </figure>
      </section>
    </>
  );
};
