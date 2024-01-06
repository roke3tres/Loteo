import "../Styles/Projects.css";
import Planos1000 from "../Imagenes/Planos1000.jpg";
import L14Aerea from "../Imagenes/L14Aerea.jpg";
import TablaAreas14 from "../Imagenes/TablaAreas14.jpg";
import BasicExample from "./Nav";

function VistaPlanos1000() {
  return (
    <>
      <BasicExample />
      <div className="lote">
        <img className="curvas" src={Planos1000} alt="Plano" />
        <img className="curvas" src={L14Aerea} alt="Plano" />
        <img className="curvas" src={TablaAreas14} alt="Areas" />
      </div>
    </>
  );
}

export default VistaPlanos1000;
