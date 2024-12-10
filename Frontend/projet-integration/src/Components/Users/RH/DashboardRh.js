import React, { useEffect, useState } from "react";
import "./DashboardRh.css";
import Employees from "../../../pages/Employees";
import Fournisseur from "../../../pages/Fournisseur";
import HomePageRh from "../../../pages/HomePageRh";
import Logout from "../../Auth/Logout";
import axios from "axios";

function DashboardRh() {
  const [view, setView] = useState("HomePageRh");
  const [countEmployees, setCountEmployees] = useState(0);

  const countEmp = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/countEmployees");
      setCountEmployees(resp.data.count); 
    } catch (error) {
      console.log("Error counting employees:", error);
    }
  };

  useEffect(() => {
    countEmp();
  }, []);
  const renderContent = () => {
    switch (view) {
      case "employees":
        return <Employees />;
      case "suppliers":
        return <Fournisseur />;
      case "HomePageRh": 
        return <HomePageRh />;
      default:
        return <HomePageRh />;
    }
  };
  

  return (
    <div>
      <div className="wiou">
        <div className="sideBar">
          <div className="pContent">
          <button onClick={() => setView("HomePageRh")}>Home Page</button>
<button onClick={() => setView("suppliers")}>Fournisseur</button>
<button onClick={() => setView("employees")}>Employé</button>

            
          </div>
        </div>
        <div className="content">
          <div className="navbar">
            <h4>My Profile</h4>
            <Logout />
          </div>
          <div className="stat">
            <div className="card1">
              <h4>Nombre totale d'employés</h4>
              <p className="small">{countEmployees}</p>
            </div>
            <div className="card1">
              <h4>Nombre totale des fournisseurs</h4>
              <p className="small">5</p>
            </div>
          </div>

          <div className="contents">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardRh;
