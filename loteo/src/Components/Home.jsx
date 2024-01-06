import BasicExample from "../Components/Nav";
import Mapa from "../Components/Mapa";
import "../Styles/Home.css";
import Project1 from "./Proejct1";
import P1000 from "./P1000";
import P4000 from "./P4000";
import RenderEntrada from "./RenderEntrada";
import RendersCasa from "./RendersCasa";

function Home() {
  return (
    <>
      <BasicExample />
      <div className="background">
        <h1 className="sierras">Sierras del Peñasco</h1>
      </div>
      <Project1 />
      <P1000 />
      <P4000 />
      <RenderEntrada />
      <Mapa />
      <RendersCasa />
    </>
  );
}

export default Home;
