import "../Styles/Projects.css";
import Curvas from "../Imagenes/Curvas.jpg";

function Project1() {
  return (
    <>
      <div className="lote">
        <h1 className="lotetitle">Lote de 29Hás</h1>
        <img className="curvas" src={Curvas} alt="Mapa de ubicación" />
      </div>
    </>
  );
}

export default Project1;
