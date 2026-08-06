import "./hero.css";

export const Hero = ()=>{
  return(
    <section id ="hero" className="hero">

      <div className="container hero__container">

        <div className="hero__content">

          <span className="hero__hello">
            Hola, soy
          </span>

          <h1> 
            Marta Diaz <br/>
            valdebenito
          </h1>

          <h2> Desarrolladora Frontend</h2>

          <p> Tengo experiencia en React, TypeScript Me apasiona crear 
            aplicaciones web modernas </p>

        </div>
      </div>
    </section>    
  );
};
