import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import ServicesScreen from "./screens/ServicesScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import ConsultantScreen from "./screens/ConsultantScreen";
import RenovationScreen from "./screens/RenovationScreen";
import BuildingScreen from "./screens/BuildingScreen";
import InteriorScreen from "./screens/InteriorScreen";
import EngineeringScreen from "./screens/EngineeringScreen";
import PlanningScreen from "./screens/PlanningScreen";

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
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;