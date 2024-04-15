import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import ChatRoom from "./page/ChatRoom/ChatRoom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<ChatRoom />} />
      </Routes>
    </div>
  );
}

export default App;
