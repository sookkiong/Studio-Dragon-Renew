import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import PageHeader from "./layout/PageHeader";
import GlobalStyle from "./GlobalStyle";
import Footer from "./layout/Footer";

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
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
