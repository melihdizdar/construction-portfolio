import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

function App() {
  return (
    <div className="app">
        <BrowserRouter>
            <Navbar/>
            <main>
                <Routes>
                    <Route path="/" element={<HomeScreen/>}/>
                    <Route path="/about" element={<AboutScreen/>}/>
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;