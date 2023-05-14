import HomeScreen from "./pages/HomeScreen"
import Login from "./pages/Login";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectorUser } from "./features/user/userSlice";
import './App.css';

function App() {
  const user = useSelector(selectorUser);
  const disPatch = useDispatch();

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        console.log(userAuth)
        // Logged in
        disPatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));
      }
      else {
        // Logged out
        disPatch(logout);
      }
    })

    return unsubcribe;
  }, [])

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <div className="app">
      <BrowserRouter>
        {
          user ? (
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
