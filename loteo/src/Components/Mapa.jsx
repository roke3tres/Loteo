import "../Styles/Mapa.css";
import Distancias from "../Imagenes/Distancias.jpg";

function Mapa() {
  return (
    <>
      <div className="bg-dark pb-5">
        <h1 className="ubicacion">Ubicación</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="5min">
                <h2 className="distancias text-start">A 5 minutos:</h2>
                <ul className="lista text-start">
                  <li>La Asistencial</li>
                  <li>Sodimac</li>
                  <li>Ancap</li>
                  <li>Supermercado 360 24hs</li>
                  <li>Supermercado El Dorado</li>
                </ul>
              </div>
              <div className="10min">
                <h2 className="distancias text-start ">A 10 minutos:</h2>
                <ul className="lista  text-start">
                  <li>Ruta Perimetral</li>
                  <li>Macro Mercado</li>
                  <li>Devoto</li>
                  <li>International College</li>
                  <li>Woodside School</li>
                  <li>St. JosephMary College</li>
                </ul>
              </div>
              <div className="15min">
                <h2 className="distancias text-start ">A 15 minutos:</h2>
                <ul className="lista  text-start">
                  <li>Sanatorio Mautone</li>
                  <li>Sanatorio Cantegril</li>
                  <li>Playas Mansa y Brava</li>
                  <li>Tienda Inglesa</li>
                  <li>St. Clare's College</li>
                  <li>Punta Ballena</li>
                  <li>Peninsula</li>
                  <li>La Barra</li>
                </ul>
              </div>
              <div className="col-md-6">
                <img
                  className="mapa"
                  src={Distancias}
                  alt="Mapa de ubicación"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mapa;
