import './App.css';
import {Route , Routes} from 'react-router-dom'
import Login from "./Components/Auth/Login"
import Dash from "./Components/Dashboard/dash"
function App() {
  return (
    <div className="App">
     <Routes>
      <Route extact path="/" element={<Login />}/>
      <Route path="/dash" element={<Dash />}/>
    </Routes>
    </div>
  );
}

export default App;
