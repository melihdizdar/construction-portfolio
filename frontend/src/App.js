import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div>
        <BrowserRouter>
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