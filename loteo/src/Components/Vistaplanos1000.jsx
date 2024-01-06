import "../Styles/Projects.css";
import Planos1000 from "../Imagenes/Planos1000.jpg";
import BasicExample from "./Nav";

function VistaPlanos1000() {
  return (
    <>
      <BasicExample />
      <div className="lote">
        <h1 className="lotetitle14">Proyecto 1000 + 4000</h1>
        <h4 className="lotesubtitle">
          114 lotes de 1000m2 + 20 lotes de 4000m2
        </h4>
        <img className="curvas" src={Planos1000} alt="Mapa de ubicación" />
      </div>
    </>
  );
}

export default VistaPlanos1000;
