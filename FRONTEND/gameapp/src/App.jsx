
import { BrowserRouter , Routes , Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import GamePage from "./pages/GamePage";

function App() {

  return (
    <BrowserRouter>

    <Routes>
    <Route index element={<HomePage/>} />
    <Route path="/gamepage" element={<GamePage />}/>
    </Routes>

  </BrowserRouter>
  )
}

export default App
