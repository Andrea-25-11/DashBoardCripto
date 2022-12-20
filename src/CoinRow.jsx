
// Se importan funciones desde App.js y la funcionalidad de los gráficos
import React from 'react'
import './CoinRow.css'
import {deleteDec, colorDec, numberF} from './App'
import Graph from './Graph'

/// Estas son cada una de las filas que va a ocnformar la tabla de las primeras 4 monedas mejor valorizadas en el mercado de monedas. El export en funciones nombradas, se refiere a que se exporta la sentencia especifica que esta maneje.
// Se le pasa como parametros destructurados la moneda y su indice correspondiente.
export default function CoinRow({coin, index}) {
  return (
    <tr>
      <td>{index}</td>
      <td>
        <div className='coin_image_container'>
          <img src={coin.image} alt={coin.name} title={coin.name}/>
        </div>
      </td>
      <td title='Precio'>{numberF.format(coin.current_price)} US$</td>
      <td className={colorDec(coin.market_cap_change_percentage_24h)} title='24 h'>{deleteDec(coin.market_cap_change_percentage_24h, 2)}%</td>
      <td title='Vol. total'>{numberF.format(coin.total_volume)}US$</td>
      <td title='Cap. mercado'>{numberF.format(coin.market_cap)}US$</td>
      <td title='Últimos 7 días'><Graph coin={coin.id} days={7} color={colorDec(coin.market_cap_change_percentage_24h)}/></td>
    </tr>
  )
}