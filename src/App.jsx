import "./App.css";
import { Abdullah } from "./components/Api";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LemonWares from "./components/LemonWares";
import Navbar from "./components/Navbar";
import Over100 from "./components/Over100";
import WebHosting from "./components/WebHosting";

function App() {
  return (
    <>
      <Navbar />
      <Hero /> 
       <WebHosting />
      <LemonWares />
      <Over100 />
      <Footer />
      <Abdullah/>
    </>
  );
}

export default App;
