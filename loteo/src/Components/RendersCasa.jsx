import "../Styles/Projects.css";
import CasaPiedraFrente from "../Imagenes/Casa Piedras Frente.jpg";
import CasaPiedra from "../Imagenes/Casa Piedras.jpg";
import Fotomontaje from "../Imagenes/B13B.jpg";

function RendersCasa() {
  return (
    <>
      <div className="lote">
        <img className="curvas" src={CasaPiedraFrente} alt="Render" />
        <img className="curvas" src={CasaPiedra} alt="Render" />
        <img className="curvas" src={Fotomontaje} alt="Fotomontaje" />
      </div>
    </>
  );
}

export default RendersCasa;
