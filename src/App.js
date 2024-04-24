import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Clients from "./Components/Clients";
import About from "./Components/About";
import About1 from "./Components/About1";
import Sarves from "./Components/Sarves";
import Sarvisimg from "./Components/Sarvisimg";
import Features from "./Components/Features";
import Portfolio from "./Components/Portfolio";
import Team from "./Components/Team";
import Prising from "./Components/Prising";
import Contact from "./Components/Contact";
import Frequently from "./Components/Frequently";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Clients />
      <About />
      <About1 />
      <Sarves/>
      <Sarvisimg/>
      <Features/>
   
      <Portfolio/>
      <Team/>
      <Frequently/>
      <Prising/>
      <Contact/>
    </div>
  );
}

export default App;
