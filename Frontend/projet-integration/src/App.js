import './App.css';
import {Route , Routes} from 'react-router-dom'
import Login from "./Components/Auth/Login"
import DashboardRh from "./Components/Users/RH/DashboardRh"
function App() {
  return (
    <div className="App">
     <Routes>
      <Route extact path="/" element={<Login />}/>
      <Route path="/Dashboard-RH" element={<DashboardRh />}/>
    </Routes>
    </div>
  );
}

export default App;
