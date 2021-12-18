import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <main>
                <Routes>
                    <Route path="/" element={<HomeScreen/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    </div>
  );
}

export default App;