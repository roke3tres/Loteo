import "../Styles/Projects.css";
import BasicExample from "./Nav";

function ModeloPortuguesa() {
  return (
    <>
      <BasicExample />
      <iframe
        src="https://poly.cam/capture/11F4795B-F2E0-423A-94A7-D9EF064D0B21"
        title="polycam capture viewer"
        className="polycam"
      ></iframe>
    </>
  );
}

export default ModeloPortuguesa;
