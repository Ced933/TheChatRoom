import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import ChatRoom from "./page/ChatRoom/ChatRoom";
import Navigation from "./components/Navigation/Navigation";
import BaseLayout from "./components/BaseLayout";
import Profil from "./page/Profil/Profil";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chat" element={<ChatRoom />} />
          <Route path="/nav" element={<Navigation />} />
          <Route path="/profil/:id" element={<Profil />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
