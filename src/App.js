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
import HomeScreen from "./pages/HomeScreen"
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import './App.css';

function App() {
  const user = useSelector(selectorUser);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect/user,dispatch')
    const unsubcribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        console.log(userAuth)
        // Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));
      }
      else {
        // Logged out
        console.log('do logout')
        dispatch(logout());
      }
    })

    return unsubcribe;
  }, [])

  useEffect(() => {
    console.log('usereffect/user')
    console.log(user)
  }, [user])

  return (
    <div className="app">
      <BrowserRouter>
        {
          user.user ? (
            <Routes>
              <Route path="/*" element={<HomeScreen />} />
              <Route path="/test" element={<div>test</div>} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          ) : <Login />
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
