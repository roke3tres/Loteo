import "../Styles/Projects.css";
import Entrada from "../Imagenes/Entrada.jpg";

function RenderEntrada() {
  return (
    <>
      <div className="lote">
        {/* <h1 className="rendertitle">Entrada Ruta 39</h1> */}
        <img className="curvas" src={Entrada} alt="Render" />
      </div>
    </>
  );
}

export default RenderEntrada;
