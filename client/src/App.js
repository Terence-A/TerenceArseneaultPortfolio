import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="appNav">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
