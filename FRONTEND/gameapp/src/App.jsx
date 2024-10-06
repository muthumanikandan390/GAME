
import { BrowserRouter , Routes , Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import GamePage from "./pages/GamePage";
import { Provider } from 'react-redux';
import store from './store/store';
import Result from "./components/result/Result";
import ResultPage from "./pages/ResultPage";
import { PrimeReactProvider } from 'primereact/api';


function App() {

  return (
    <Provider store={store}>

    <BrowserRouter>

    <Routes>
    <Route index element={<HomePage/>} />
    <Route path="/gamepage" element={<GamePage />}/>
    <Route path="/resultPage" element ={<ResultPage />} />
    </Routes>

  </BrowserRouter>

  </Provider>
  )
}

export default App
