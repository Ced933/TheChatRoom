import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import ChatRoom from "./page/ChatRoom/ChatRoom";
import BaseLayout from "./components/BaseLayout";
import Profil from "./page/Profil/Profil";
import ErrorPage from "./page/ErrorPage/ErrorPage";
import { useSelector } from "react-redux";
import Home from "./page/Home/Home.tsx";

function App() {
  const user = useSelector((state) => state.user.userInfo);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          {user.isConnect === "yes" ? (
            <Route path="/chat" element={<ChatRoom />} />
          ) : null}
          {user.isConnect === "yes" ? (
            <Route path="/profil/:id" element={<Profil />} />
          ) : null}

          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
