// Se importa el componente card, así mismo se trae la condicional del color del grafico dependiendo del número conocida por ser la funci{on colorDec, y se importa Graph

import './Card.css'
import {colorDec} from './App'
import Graph from './Graph'

// Se exporta la funcion card la cual tiene como parámetro un objeto que contiene 5 datos para ser utilizados a lo largo de la creaci{on del bloque de código HTML
export default function Card({price, porcentaje, img, coinId, cur}) {
    return (
        <div className="card">
            <div className='cripto-info'>
                <img className='card-img' src={img} alt="" />

                <div className='cripto-title'>
                    <h2> {price} </h2>

                    <h2 className={`porcentaje ${colorDec(porcentaje)}`}>{porcentaje}%</h2>
                </div>
            </div>
            
            <div className="graphic">  {/* El componente Graph tiene la logica para pintar cada grafica que se necesite y esto depende de los datos */}
                <Graph coin={coinId} currency={cur} color={colorDec(porcentaje)}/>
            </div>
        </div>
    )
}