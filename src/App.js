import { useEffect, useState } from 'react' // Se da la importación de los estados de useEffect y useState de react ya que son utilizados posteriormente en el la creación del componente App
// Se da la importación de la hoja de estilos externa
import './App.css';

// Se están importando los componentes que conofrmarán al App
import Header from './Header'
import CardPrincipal from './CardPrincipal';
import Card from './Card'
import Convert from './Convert'
import TableCoins from './TableCoins'
import Footer from './Footer'

function App() {
  /*
    Se utilizan 3 Hooks de tipo useState donde se declara una variable y se utiliza el Set junto ocn el nombre de la variable para declarar un estado inicial que para el estado setCoinspermite almacenar el valor de todas las monedas que nos entrega el consumo de la API. Para el caso de setCurrency permite saber el valor de todas las divisas que nos entrega el consumo de la API y para el estado setSelCur se almacena el valor de la divisa seleccionada que por defecto se selecciono dólares.
  */
  const [coins, setCoins] = useState(); 
  const [currency, setCurrency] = useState();
  const [selCur, setSelCur] = useState("usd");

  // Definimos una variable que va a contener el llamado de la API mediante el uso del asyncy el awai. En primer lugar mediante el await fetch lo que se hace es indiciar el URL de la API de la cual queremos traer la información a nuestro Dashboard, una vez se obtiene la informacion de la API le agregamos el método .json a la constante en la que hicismos el await para convertid dichos datos en un objeto. Este ciclo lo realizamos a continuación dos veces. La primera (response)como se dijo anteriormente para el cambio de la moneda seleccionada y la segunda (response_cur) para saber el valor de las divisas.
    const getData = async () => {

    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selCur}&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C90d%2C1y`
    );

    const json = await response.json();
    
    const response_cur = await fetch(
      `https://api.coingecko.com/api/v3/simple/supported_vs_currencies`
    );

    const cur = await response_cur.json();
    
    // Para finalizar almacenamos la información de todas las monedas en estos estados:
    setCoins(json);

    setCurrency(cur);
  };

  // A continuaci{on utilizamso el hook useEffect, el cual nos permite cargar la información cuando el componente este listo cada vez que lo solicitemos tanto para obtener los tipos d emonedas y el valor de las mismas
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [selCur]);

  /*
    En el siguiente caso estamos dando uso de un operador ternario validamos: Si el valor es diferente a la información de coins, es decir, si la información que nos entrega la API aun no esta lista entonces va a aparecer el texto "cargando", de lo contrario va a renderizar los componentes
  */ 
 /*Se llama en el header la funcion que permite seleccionar la moneda */
 /*Se llama en la cardp pricipal la funcion que permite seleccionar la moneda */
  /*En el return  */
  return !coins ? (
    "Cargando..."
  ) : (
    <div className="App">
      <Header currencys={currency} fun={setSelCur} cur={selCur} /> 
      <main>
        <CardPrincipal json={coins[0]} cur={selCur} /> 
        {/* Se le asigna las propiedades que sean necesarias para la visualizacion en la parte del encabezado,
            Estas props son el simbolo de la moneda, el despliegue de las diferentes monedas que se pueden elegir y el valor de esa moneda. */}
        <div className="cards_con">  {/* El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. */}
          {coins.map(
            (
              {
                id,
                symbol,
                image,
                current_price,
                price_change_percentage_30d_in_currency,
              },
              index
            ) => {{/* Indica que si el valor de index es diferente a 0 retorne una tarjeta con la informacion etraida del objeto coins*/}
              if (index != 0) { 
                return (
                  <Card
                    key={index}
                    price={`${symbol} - ${current_price} ${selCur} `}
                    porcentaje={deleteDec(
                      price_change_percentage_30d_in_currency,
                      2
                    )}
                    img={image}
                    coinId={id}
                    cur={selCur}
                  />
                );
              }
            }
          )}
        </div>
      </main>
      <Convert />{/*  Trae toda la logia del componente convert y se pinta */}
      <TableCoins coins={coins} />{/* Se le pasa las props que es la lista de la monedas que existen */}
      <Footer />
    </div>
  );
}

export default App;

// Función para formatear los decimales
export function deleteDec(val, decimal) {
  return val.toFixed(decimal);
}

// En esta funcion con operador ternario se dice que el color de los graficos cambiaran dependiendo e¿de un valor numérico siendo que si el numero es menor a 0 el color sera rojo, de lo contrario será verde
export function colorDec(num) {
  return num > 0 ? "green" : "red";
}

// Función para separar los valores en miles
export const numberF = Intl.NumberFormat("es-ES");