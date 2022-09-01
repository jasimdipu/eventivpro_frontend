import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompanyName from "./Auth/Login/CompanyName/CompanyName";
import Login from "./Auth/Login/Login";
import Register from "./Auth/Register/Register";
import SignUpDetails from "./Auth/SignUpDetails/SignUpDetails";
import Home from "./components/Home/Home"; 

function App() {
  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/login' element={<Login />} />  
          <Route path='/register' element={<Register />} />  
          <Route path='/signup-details' element={<SignUpDetails />} />  
          <Route path='/company-name' element={<CompanyName />} />   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
