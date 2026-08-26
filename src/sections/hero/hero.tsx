import "./hero.css";
import { FaCode, FaGithub, FaReact } from "react-icons/fa";
import { SiCss, SiHtml5, SiTypescript } from "react-icons/si";

export const Hero = ()=>{
  return(
    <section id ="hero" className="hero">

      <div className="container hero__container">

        <div className="hero__content">
          <div className="hero__intro">
            <div className="hero__photo-wrapper">
              <img
                className="hero__photo"
                src="/images/foto-perfil.jpeg"
                alt="Marta Díaz Valdebenito"
              />
            </div>

            <div className="hero__text">
              <span className="hero__hello">
                Hola, soy
              </span>

              <h1 className="hero__title"> 
                Marta Diaz <br/>
                valdebenito
              </h1>
            </div>
          </div>

          <div id="about" className="hero__about">
            <h2 className="hero__subtitle">Desarrolladora Frontend</h2>

            <p className="hero__description">
              Me especializo en desarrollar interfaces web modernas, responsivas y funcionales.
              Trabajo con React y TypeScript, cuidando los detalles para crear experiencias claras
              y fáciles de usar.
            </p>

            <div className="hero__technologies">
              <p className="hero__technologies-text">Tecnologías con las que trabajo</p>

              <div className="hero__technology-icons" aria-label="React, TypeScript, HTML, CSS y GitHub">
                <span className="technology-icon technology-icon--react"><FaReact /></span>
                <span className="technology-icon technology-icon--typescript"><SiTypescript /></span>
                <span className="technology-icon technology-icon--html"><SiHtml5 /></span>
                <span className="technology-icon technology-icon--css"><SiCss /></span>
                <span className="technology-icon technology-icon--github"><FaGithub /></span>
              </div>

              <div className="hero__technology-orbit" aria-hidden="true">
                <span className="hero__technology-core"><FaCode /></span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>    
  );
};
