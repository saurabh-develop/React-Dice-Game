import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage.js";
import Dice from "./components/Dice";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/dice" element={<Dice />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
