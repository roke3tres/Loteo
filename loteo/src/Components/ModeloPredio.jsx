import "../Styles/Projects.css";
import BasicExample from "./Nav";

function ModeloPredio() {
  return (
    <>
      <BasicExample />
      <iframe
        src="https://poly.cam/capture/0d82117e-fd95-450e-8a7f-2bd6a8e13178"
        title="polycam capture viewer"
        className="polycam"
      ></iframe>
    </>
  );
}

export default ModeloPredio;
