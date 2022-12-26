import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import BlackLayout from "./layout/BlackLayout";
import WhiteLayout from "./layout/WhiteLayout";
import GlobalStyle from "./GlobalStyle";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Contents from "./pages/Contents";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/" element={<BlackLayout />}>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/" element={<WhiteLayout />}>
            <Route path="contents" element={<Contents />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
