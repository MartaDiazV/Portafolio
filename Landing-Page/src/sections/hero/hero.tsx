import "./hero.css";

export const Hero = ()=>{
  return(
    <section id ="hero" className="hero">

      <div className="container hero__container">

        <div className="hero__content">

          <span className="hero__hello">
            Hola, soy
          </span>

          <h1 className="hero__title"> 
            Marta Diaz <br/>
            valdebenito
          </h1>

          <h2 className="hero__subtitle">Desarrolladora Frontend</h2>

          <p className="hero__description">
            Tengo experiencia en React y TypeScript. Me apasiona crear
            aplicaciones web modernas.
          </p>

        </div>
      </div>
    </section>    
  );
};
