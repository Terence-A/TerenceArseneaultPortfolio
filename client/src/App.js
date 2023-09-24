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
            <Route
              path="/"
              element={<About />}
              exact
              activeClassName="active"
            />
            <Route
              path="/portfolio"
              element={<Portfolio />}
              activeClassName="active"
            />
            <Route
              path="/contact"
              element={<Contact />}
              activeClassName="active"
            />
            <Route
              path="/resume"
              element={<Resume />}
              activeClassName="active"
            />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
