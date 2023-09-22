import React from "react";
import "./App.css";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { LoginPage } from "./Pages/Login/Login";
import { UserListPage } from "./Pages/UserList/UserList";
import { HomePage } from "./Pages/Home/Home";
import { UserDetailsPage } from "./Pages/UserDetails/UserDetails";
import { OrganismSideNavBar } from "library-tfm";

const App = () => {
  const navigate = useNavigate();
  const menuData = [
    {
      id: 1,
      disabled: false,
      onClick: () => handleClick("/"),
      text: "Home",
      type: "menu" as "menu",
      icon: "home",
    },
    {
      id: 2,
      disabled: false,
      onClick: () => handleClick("/user-list"),
      text: "Usuarios",
      type: "menu" as "menu",
      icon: "manage",
    },
    {
      id: 3,
      disabled: false,
      onClick: () => console.log("change pag"),
      text: "Vehículos",
      type: "menu" as "menu",
      icon: "manage",
    },
    {
      id: 4,
      disabled: false,
      onClick: () => console.log("change pag"),
      text: "Ordenes",
      type: "menu" as "menu",
      icon: "notifications1",
    },
    {
      id: 5,
      disabled: false,
      onClick: () => console.log("change pag"),
      text: "Inventario",
      type: "menu" as "menu",
      icon: "calculate",
    },
    {
      id: 6,
      disabled: false,
      onClick: () => console.log("change pag"),
      text: "Configuración",
      type: "menu" as "menu",
      icon: "settings",
    },
  ];
  const handleClick = (url: string) => {
    navigate(url);
  };

  return (
    <div style={{overflow: "hidden"}}>
      <OrganismSideNavBar  userName="Pepito Perez"
      buttonSelectClick={(selected)=>console.log("change pag: ", selected)}
      handleClickLogOut={()=>navigate("/login")} notView={window.location.pathname === '/login'}
      menuData={menuData} >
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/user-list" element={<UserListPage />} />
        <Route path="/user/:id" element={<UserDetailsPage />} />
      </Routes>
      </ OrganismSideNavBar>
    </div>
  );
};

export default App;
