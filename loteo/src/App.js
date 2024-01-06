import {Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import ModeloPredio from "./Components/ModeloPredio";
import Vistaplanos1000 from "./Components/Vistaplanos1000";
import Vistaplanos4000 from "./Components/Vistaplanos4000";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modelopredio" element={<ModeloPredio />} />
        <Route path="/lotes10004000" element={<Vistaplanos1000 />} />
        <Route path="/lotes4000" element={<Vistaplanos4000 />} />
        {/* <Route path="/presentacion" element={<Documentacion />} /> */}
      </Routes>
    </div>
  );
}

export default App;
