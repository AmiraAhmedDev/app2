import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import Navbar from "./components/Navbar.jsx"
import About from "./Pages/About.jsx"
import Home from "./Pages/Home.jsx"
import Contact from "./Pages/Contact.jsx"
import { Routes } from 'react-router';
import { Route } from "react-router";

function App() {

  return (
    <>
      <Navbar />  
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer />
    </>
  )
}

export default App
