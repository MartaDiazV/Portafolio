import { FaCheckCircle } from "react-icons/fa";
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

          <div>
            <h3 className="project-card__title">Todo Task</h3>
            <p className="project-card__description">
              Aplicación para organizar tareas diarias, marcar actividades completadas
              y mantener un mejor control de tus pendientes.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
