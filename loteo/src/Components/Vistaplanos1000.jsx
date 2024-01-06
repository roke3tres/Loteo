import "../Styles/Projects.css";
import Planos1000 from "../Imagenes/Planos1000.jpg";
import L14Aerea from "../Imagenes/L14Aerea.jpg";
import BasicExample from "./Nav";

function VistaPlanos1000() {
  return (
    <>
      <BasicExample />
      <div className="lote">
        <img className="curvas" src={Planos1000} alt="Plano" />
        <img className="curvas" src={L14Aerea} alt="Plano" />
      </div>
    </>
  );
}

export default VistaPlanos1000;
