import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu />}/>
          <Route path="/about" exact element={<About />}/>
          <Route path="/contact" exact element={<Contact />}/>

        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
