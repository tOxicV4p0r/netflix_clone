import HomeScreen from "./pages/HomeScreen"
import Login from "./pages/Login";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  const user = {}

  return (
    <div className="app">
      <BrowserRouter>
        {
          !user ? (
            <Routes>
              <Route path="/*" element={<HomeScreen />} />
              <Route path="/test" element={<div>test</div>} />
            </Routes>
          ) : <Login />
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
