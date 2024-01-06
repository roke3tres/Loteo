import {Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import ModeloPredio from "./Components/ModeloPredio";
import Vistaplanos1000 from "./Components/Vistaplanos1000";
import Vistaplanos4000 from "./Components/Vistaplanos4000";
import ModeloTierraVino from "./Components/ModeloTierraVino";
import AlbumGeneral from "./Components/AlbumGeneral";
import ModeloCeramica from "./Components/ModeloCeramica";
import ModeloPortuguesa from "./Components/ModeloPortuguesa";
import FotosTaller from "./Components/FotosTaller";
import FotosTierrayVino from "./Components/FotosTierrayVino";
import FotosPortuguesa from "./Components/FotosPortuguesa";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taller" element={<ModeloCeramica />} />
        <Route path="/modeloportuguesa" element={<ModeloPortuguesa />} />
        <Route path="/modelopredio" element={<ModeloPredio />} />
        <Route path="/lotes10004000" element={<Vistaplanos1000 />} />
        <Route path="/lotes4000" element={<Vistaplanos4000 />} />
        <Route path="/tierrayvino" element={<ModeloTierraVino />} />
        <Route path="/albumgeneral" element={<AlbumGeneral />} />
        <Route path="/fotostaller" element={<FotosTaller />} />
        <Route path="/fotostierrayvino" element={<FotosTierrayVino />} />
        <Route path="/fotosportuguesa" element={<FotosPortuguesa />} />
      </Routes>
    </div>
  );
}

export default App;
