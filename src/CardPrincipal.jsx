// Se importa los componentes que se van autilizar tales como  las funciones especificas para el color y formato de deciales de los porcentajes y el componente para el tema de visualizacion de la grafica.

import './CardPrincipal.css'
import { deleteDec, colorDec } from './App'
import Graph from './Graph'

// Se exporta el card principal que tiene como parametro  algunos datos del json que nos trajo la peticion de la API
export default function CardPrincipal({ json: { id, symbol, current_price, image,               price_change_percentage_1h_in_currency, price_change_percentage_24h_in_currency, price_change_percentage_7d_in_currency, price_change_percentage_30d_in_currency, price_change_percentage_1y_in_currency }, cur= 'usd'}) {

    return (
        // Las etiquetas especiales llamadas <> </>, ayudan a pintar un componente sin necesidad de que se cree una etiqueta padre.
        <>
            <article className="cripto-first">
                <div className="cripto-info">
                    <img src={image} alt="Icono de la cripto" />

                    <div className='cripto-title'>
                        <h2>{symbol} - {current_price} {cur}</h2>
                        
                        <h2 className={`porcentaje ${colorDec(price_change_percentage_30d_in_currency)}`}>{deleteDec(price_change_percentage_30d_in_currency, 2)}%</h2> {/* Porcentaje de subida o bajada de la moneda con el formato de solo dos decimales */}
                    </div>
                </div>

                <div className="graphic">{/* Grafica representativa a la moneda con datos requeridos, se le pasa como props el id y el porcentaje */}
                    <Graph type={0} coin={id} currency={cur}/>
                </div>

                <div className="capitalization"> 
                    <h2>Capitalización</h2> {/* Tabla con prcentajes de caida o subida de la moneda en periodos de tiempo, esos porcentajes tiene el color que corresponde a sies mayor o menor a 0 y solo se visualiza dos decimales */}

                    <table className="capitalization-table">
                        <thead>
                            <tr>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>1m</th>
                                <th>1y</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className={colorDec(price_change_percentage_1h_in_currency)}>{deleteDec(price_change_percentage_1h_in_currency, 2)} %</td>
                                <td className={colorDec(price_change_percentage_24h_in_currency)}>{deleteDec(price_change_percentage_24h_in_currency, 2)} %</td>
                                <td className={colorDec(price_change_percentage_7d_in_currency)}>{deleteDec(price_change_percentage_7d_in_currency, 2)} %</td>
                                <td className={colorDec(price_change_percentage_30d_in_currency)}>{deleteDec(price_change_percentage_30d_in_currency, 2)} %</td>
                                <td className={colorDec(price_change_percentage_1y_in_currency)}>{deleteDec(price_change_percentage_1y_in_currency, 2)} %</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </article>
        </>
    )
}