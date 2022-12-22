import About from "./pages/about";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
