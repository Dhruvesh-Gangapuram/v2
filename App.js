import "./App.css";
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
       <Router>
         <Routes>
           <Route path="/signin" element={<Homepage />} />
           <Route path="/register" element={<Register />} />
           <Route path="/" element={<Login />} />
         </Routes>
       </Router>
    </div>
  );
}

export default App;
