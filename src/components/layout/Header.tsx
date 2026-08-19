import "./Header.css";

export const Header = () => {
  return (
    <header className="header">

      <div className="container header__container">

        <h1 className="logo">
        </h1>

        <nav className="menu">
          <a href="#hero">Inicio</a>
          <a href="#about">Sobre mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#cv">CV</a>
          <a href="#contact">Contacto</a>
        </nav>

      </div>

    </header>
  );
};
