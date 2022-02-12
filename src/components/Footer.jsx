import React from "react";
import Formulario from "./PostForm";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
        
        <div className='footer-info'> 
          <div className='footer-form'>
            <h1>Formulario</h1>
            <Formulario />
          </div>
          <div className='footer-contact-hours'>
            <div className='footer-contact'>
              <h1>Contacto</h1> 
              <p><FontAwesomeIcon icon={faPhone} style={{color:"#75DED7"}} /> 0800-000-0000</p>
              <p><FontAwesomeIcon icon={faWhatsapp} style={{color:"#75DED7"}} /> 11-00000000</p>
              <p><FontAwesomeIcon icon={faLocationDot} style={{color:"#75DED7"}} /> Lorem ipsum 555</p> 
            </div>
            <div className='footer-hours'>
              <h1>Horario</h1>
              <p>Lunes a Viernes</p>
              <p>10:00 - 19:00 hs.</p>
            </div>
          </div>
        </div>
        <div className='copyright'>
          Todos los derechos reservados
        </div>
      </footer>
    );
  };
  
  export default Footer;