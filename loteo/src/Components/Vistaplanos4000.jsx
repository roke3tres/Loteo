import "../Styles/Projects.css";
import Planos4000 from "../Imagenes/Planos4000.jpg";
import L4Aerea from "../Imagenes/Lotes4000.jpg";
import Tabla4000 from "../Imagenes/Tabla4000.jpg";
import BasicExample from "./Nav";

function VistaPlanos4000() {
  return (
    <>
      <BasicExample />
      <div className="lote">
        <img className="curvas" src={Planos4000} alt="Plano" />
        <img className="curvas" src={L4Aerea} alt="Plano" />
        <img className="curvas" src={Tabla4000} alt="Areas" />
      </div>
    </>
  );
}

export default VistaPlanos4000;
