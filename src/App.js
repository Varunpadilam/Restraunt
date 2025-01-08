import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import Fotter from "./Component/Fotter";
import Contact from "./Pages/Contact";
import List from "./Component/List";
import Restraunts from "./Pages/Restraunts";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/restraunt" element={<Restraunts />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}

export default App;
