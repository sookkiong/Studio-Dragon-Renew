import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import PageHeader from "./layout/PageHeader";
import GlobalStyle from "./GlobalStyle";
import Footer from "./layout/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/" element={<PageHeader />}>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
