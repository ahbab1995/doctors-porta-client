import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import Signup from "./Pages/Login/Signup";
import Requireauth from "./Pages/Shared/Requireauth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className='px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Requireauth><Appointment/></Requireauth> } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
