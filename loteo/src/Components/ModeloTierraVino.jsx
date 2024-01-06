import "../Styles/Projects.css";
import BasicExample from "./Nav";

function ModeloPredio() {
  return (
    <>
      <BasicExample />
      <iframe
        src="https://poly.cam/capture/3b97b128-b54c-4c5b-adcb-ae03995446fc"
        title="polycam capture viewer"
        className="polycam"
      ></iframe>
    </>
  );
}

export default ModeloPredio;
