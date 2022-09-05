import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompanyName from "./Auth/Login/CompanyName/CompanyName";
import Login from "./Auth/Login/Login";
import Register from "./Auth/Register/Register";
import SignUpDetails from "./Auth/SignUpDetails/SignUpDetails";
import Home from "./components/Home/Home"; 
import Dashboard from "./pages/AdminDashboard/Dashboard/Dashboard";
import AddEvent from "./pages/AdminDashboard/pages/AddEvent/AddEvent";
import AddTicket from "./pages/AdminDashboard/pages/AddTicket/AddTicket";
import HomeUserDashboard from "./pages/UserDashboard/HomeUserDashboard/HomeUserDashboard";

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
          <Route path='/user-dashboard' element={<HomeUserDashboard />} />   

          <Route path='/dashboard' element={<Dashboard />} />  
          <Route path='/add-ticket' element={<AddTicket />} />   
          <Route path='/add-event' element={<AddEvent />} />   

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
