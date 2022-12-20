// Se importa el componente de InputConvert ya que hace parte de este componente y un icono de flechas en bucle, así mismo al utilizarse hooks se llama al useState y useEffect


import InputConvert from './InputConvert'
import './Convert.css'
import { FaExchangeAlt } from "react-icons/fa";
import {useState, useEffect} from 'react'

/*Se da uso de 5 useState para: 1.Tener una 2.La opción de seleccionar la primera moneda 3.La opción de escoger la segunda moneda 4.El texto por defecto del input del valor de la primera moneda 5.El texto por defecto del input del valor de la primera moneda  */
export default function Convert() {
    const [coin, setCoin] = useState([])
    const [selCoin1, setSelCoin1] = useState('btc')
    const [selCoin2, setSelCoin2] = useState('eth')
    const [mainTxt, setMainTxt] = useState(0)
    const [res, setRes] = useState(0)
{/*Se realiza una llamada a los datos de la API mediante el async y se ocnvierten en un objeto mediante el medtodo .json. Los datos solicitados se encofocan en el valor de la moneda y el simbolo de la msima*/}
    const getData = async () => {
       const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
       
       const json = await response.json()

       setCoin(json)
    }

    useEffect(() => {
        getData()
    }, [])
{/*Se realiza una operación aritmetica que permitiera obtener el valor de una moneda convertida a otra, inidcando que "a" seria igual al valor ingrado por el usuario(mainTxt) se multiplicara por el valor de la moneda seleccionada en el input 1 y que  "b" sería igual al valor de la la moneda escogida inicialmnete.*/}
    useEffect(() => {
        let a, b
        coin.forEach(({symbol, current_price}) => {
            if (symbol == selCoin1) {
                a = mainTxt * current_price
            } else {
                b = current_price
            }
        })
{/*Se utiliza un operador ternario para resetaer al resultado cuando el mainTxt fuera alterado y que dicho resultado seria igual a a dividido b. y que de lo contrario el resultado se mantuviera en cero*/}
        a ? setRes(a / b) : setRes(0)
    }, [mainTxt, selCoin1, selCoin2])
{/*Se retorna el bloque de codigo html para crear el aparte de la conversión */}
    return (
        <div className='contenedor'>
            <h2>Comparación de Monedas</h2>

            <div className='input-convert'>
                <InputConvert coin={coin} fun={setSelCoin1} other={selCoin2} text={setMainTxt} type={0}/>

                <FaExchangeAlt className="icono" />

                <InputConvert coin={coin} sel="eth" fun={setSelCoin2} other={selCoin1} result={res}/>
            </div>
        </div>
    )
}