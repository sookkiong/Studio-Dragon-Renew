import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import PageHeader from "./layout/PageHeader";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
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
