import React from 'react'
import './Header.css'

/// El export en funciones nombradas, se refiere a que se exporta la sentencia especifica que esta maneje.
// Como parametro se le pasa la moneda con que se visualizara la informacion y la lista desplegable con las diferentes monedas osibles para consultar
export default function Header({currencys, fun, cur}) {
    return (
        <header className='app-header'>
            <p>Crypto Stadistics</p>

            <div className='select-button'>
            <select value={cur} name="coinSelect" id="coinSelect" 
            onChange={_ => {fun(document.getElementById("coinSelect").value)}}> {/* Evento para cuando se selecciona una moneda, la pagina se recarga y se visualiza el cambio correcto*/}
            {currencys.map((item, index) => <option value={item} key={index} >{item}</option>)}    
            {/* Recorre la lista con todas las monedas disponibles en el json que trajo por el consumo de la API y estas se logren visualizar en el menu desplegable */}
      </select>
            </div>

            <button className='toogleMode'>
                
            </button>
        </header>
    )
}