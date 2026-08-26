import "./Footer.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const Footer=()=>{
    return(
        <footer className="footer" id="contact">

        
            <div className="container footer__container">

                <p className="footer__text">
                    ¿Hablamos? Escríbeme por WhatsApp.
                </p>

                <div className="footer__social">

                    <a
                      href="https://wa.me/56971710024"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Contactarme por WhatsApp"
                      >
                      <FaWhatsapp/>
                    </a>

                    <a
                      href="https://github.com/MartaDiazV?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                      > 
                      <FaGithub/>
                    </a>

                    <a
                      href="https://linkedin.com/in/marta-diaz-valdebenito"
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                        <FaLinkedin/>
                      </a>

                </div>

            </div>

        </footer>
    );

};
