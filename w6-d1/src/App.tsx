import "./App.css";
// import ApiBtn from "./hooks/ApiBtn";

import RickData from "./components/RickData";
import DataofImg from "./components/DataofImg";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RickData />}></Route>
        <Route path="/Character/:id" element={<DataofImg />}></Route>
      </Routes>

      {/* <ApiBtn /> */}
    </>
  );
}

export default App;
