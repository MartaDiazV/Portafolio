import { FaCheckCircle, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./projects.css";

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container projects__container">
        <h2 className="projects__title">Proyectos</h2>

        <article className="project-card">
          <div className="project-card__icon" aria-hidden="true">
            <FaCheckCircle />
          </div>

          <div className="project-card__content">
            <h3 className="project-card__title">TodoTask</h3>

            <p className="project-card__description">
              Aplicación para organizar tareas diarias, marcar actividades
              completadas y mantener un mejor control de tus pendientes.
            </p>

            <p className="project-card__technologies">
              React · TypeScript · Vite · LocalStorage
            </p>

            <div className="project-card__actions">
              <a
                href="https://todo-task-marta-diaz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__button project-card__button--demo"
              >
                <FaExternalLinkAlt />
                Ver Demo
              </a>

              <a
                href="https://github.com/MartaDiazV/TodoTask-"
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__button project-card__button--github"
              >
                <FaGithub />
                GitHub
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
