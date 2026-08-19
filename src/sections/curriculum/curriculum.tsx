import { FaFilePdf } from "react-icons/fa";
import "./curriculum.css";

export const Curriculum = () => {
  return (
    <section id="cv" className="curriculum">
      <div className="container curriculum__container">
        <h2 className="curriculum__title">Currículum Vitae</h2>

        <div className="curriculum__content">
          <p>Conoce mi experiencia, habilidades y formación como desarrolladora frontend.</p>

          <a
            className="curriculum__document"
            href="/documents/CV-Marta-Diaz-Valdebenito.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir mi currículum vitae"
          >
            <span className="curriculum__icon" aria-hidden="true">
              <FaFilePdf />
            </span>
          </a>

          <a
            className="curriculum__button"
            href="/documents/CV-Marta-Diaz-Valdebenito.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mi CV
          </a>
        </div>
      </div>
    </section>
  );
};
