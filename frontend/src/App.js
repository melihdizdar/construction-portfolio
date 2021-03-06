import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import ServicesScreen from "./screens/ServicesScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import ConsultantScreen from "./screens/services/ConsultantScreen";
import RenovationScreen from "./screens/services/RenovationScreen";
import BuildingScreen from "./screens/services/BuildingScreen";
import InteriorScreen from "./screens/services/InteriorScreen";
import EngineeringScreen from "./screens/services/EngineeringScreen";
import PlanningScreen from "./screens/services/PlanningScreen";
import IstanbulScreen from "./screens/projects/IstanbulScreen";
import SakaryaScreen from "./screens/projects/SakaryaScreen";
import IzmirScreen from "./screens/projects/IzmirScreen";
import KocaeliScreen from "./screens/projects/KocaeliScreen";
import AntalyaScreen from "./screens/projects/AntalyaScreen";
import MuglaScreen from "./screens/projects/MuglaScreen";

function App() {
  return (
    <div className="app">
        <BrowserRouter>
            <Navbar/>
            <main>
                <Routes>
                    <Route exact path="/" element={<HomeScreen/>}/>
                    <Route path="/about" element={<AboutScreen/>}/>
                    <Route path="/contact" element={<ContactScreen/>}/>
                    <Route path="/services" element={<ServicesScreen/>}/>
                    <Route path="/projects" element={<ProjectsScreen/>}/>
                    <Route path="/counselor" element={<ConsultantScreen/>}/>
                    <Route path="/renovation" element={<RenovationScreen/>}/>
                    <Route path="/building" element={<BuildingScreen/>}/>
                    <Route path="/interior" element={<InteriorScreen/>}/>
                    <Route path="/engineering" element={<EngineeringScreen/>}/>
                    <Route path="/planning" element={<PlanningScreen/>}/>
                    <Route path="/istanbul" element={<IstanbulScreen/>}/>
                    <Route path="/sakarya" element={<SakaryaScreen/>}/>
                    <Route path="/izmir" element={<IzmirScreen/>}/>
                    <Route path="/kocaeli" element={<KocaeliScreen/>}/>
                    <Route path="/antalya" element={<AntalyaScreen/>}/>
                    <Route path="/mugla" element={<MuglaScreen/>}/>
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;