import "../Styles/Projects.css";
import Planos4000 from "../Imagenes/Planos4000.jpg";
import BasicExample from "./Nav";

function VistaPlanos4000() {
  return (
    <>
      <BasicExample />
      <div className="lote">
        <h1 className="lotetitle14">Proyecto lotes de 4000m2</h1>
        <h4 className="lotesubtitle">52 lotes de 4000m2</h4>
        <img className="curvas" src={Planos4000} alt="Mapa de ubicación" />
      </div>
    </>
  );
}

export default VistaPlanos4000;
