import './App.css';
import {Route , Routes} from 'react-router-dom'
import Login from "./Components/Auth/Login"
import DashboardRh from "./Components/Users/RH/DashboardRh"
import DashboardGCommande from './Components/Users/G_commande/DashboardGCommande';
import DashboardGFournisseur from './Components/Users/G_Fournisseur/DashboardGFournisseur';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route extact path="/" element={<Login />}/>
      <Route path="/Dashboard-RH" element={<DashboardRh />}/>
      <Route path ="/Dashboard-commande" element= {<DashboardGCommande/>}/>
      <Route path= "/Dashboard-Fournisseur" element ={<DashboardGFournisseur/>}/>
    </Routes>
    </div>
  );
}

export default App;
