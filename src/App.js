import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login/Login";
import Register from "./Auth/Register/Register";
import Home from "./components/Home/Home"; 

function App() {
  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/login' element={<Login />} />  
          <Route path='/register' element={<Register />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
