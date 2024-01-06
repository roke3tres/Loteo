import "../Styles/Projects.css";
import BasicExample from "./Nav";

function ModeloCeramica() {
  return (
    <>
      <BasicExample />
      <iframe
        src="https://poly.cam/capture/9D8C6C59-5A25-4A77-B65A-AECAC830D600"
        title="polycam capture viewer"
        className="polycam"
      ></iframe>
    </>
  );
}

export default ModeloCeramica;
