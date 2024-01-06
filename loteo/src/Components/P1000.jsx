import "../Styles/Projects.css";
import Project1000 from "../Imagenes/1000.jpg";

function P1000() {
  return (
    <>
      <div className="lote">
        <h1 className="lotetitle14">Proyecto 1000 + 4000</h1>
        <h4 className="lotesubtitle">
          114 lotes de 1000m2 + 20 lotes de 4000m2
        </h4>
        <img className="curvas" src={Project1000} alt="Mapa de ubicación" />
      </div>
    </>
  );
}

export default P1000;
