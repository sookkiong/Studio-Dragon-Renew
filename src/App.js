import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import PageHeader from "./layout/PageHeader";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/about" element={<PageHeader />}>
            <Route index element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
