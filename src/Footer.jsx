// Se importa el footer

import React from 'react'
import './Footer.css'

// Se exporta el footer el cual contendrá dos divs para contener texto acerca de las políticas de privacidad
export default function Footer() {
  return (
    <div className='Footer'>
      <div className='footer-up'>
        <div className='footer-p'>
        <p>DESCARGO DE RESPONSABILIDAD IMPORTANTE: todo el contenido disponible en nuestro sitio web, en los sitios web hipervinculados, y en las aplicaciones, foros, blogs, cuentas de redes sociales y otras plataformas asociados ("Sitio") tienen como único objetivo proporcionarle información general procedente de fuentes externas.</p>
        </div>

        <div className="footer-c">
                    <p>Crypto Stadistics</p>
                    <p>© 2022</p>
        </div>

      </div>
    </div>
  )
}