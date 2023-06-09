import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
