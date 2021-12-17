import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div>
        <BrowserRouter>
            <TopBar/>
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