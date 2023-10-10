import { useState } from "react";
import FormResult from "./components/FormResult";
import BasicForm from "./components/BasicForm";
import SimpleInput from "./components/SimpleInput";

function App(props) {
  const [formData, setformData] = useState();
  const getFormData = (data) => {
    setformData(data);
  };

  return (
    <div className="app">
      <BasicForm getFormData={getFormData} />
      {/* <SimpleInput/> */}
     {formData && <FormResult formData={formData} />}
    </div>
  );
}

export default App;
