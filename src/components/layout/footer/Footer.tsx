import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer=()=>{
    return(
        <footer className="footer" id="contact">
        
            <div className="container footer__container">

                <p className="footer__text">
                    {new Date().getFullYear()} Marta Diaz Valdebenito.
                    Todos los derechos reservados.
                </p>

                <div className="footer__social">

                    <a
                      href="https://github.com/TU-USUARIO"
                      target="_blank"
                      rel="noopener noreferrer"
                      > 
                      <FaGithub/>
                    </a>

                    <a
                      href="https://linkedin.com/in/TU-USUARIO"
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