import React from 'react';
import { OrganismSideNavBar } from "library-tfm";

export function HomePage() {
  return (
    <OrganismSideNavBar
      userName="Pepito Perez"
      buttonSelectClick={(selected)=>console.log("change pag: ", selected)}
      handleClickLogOut={()=>console.log("log Out")}
      menuData={[
        {
          id: 1,
          disabled: false,
          onClick: ()=>console.log("change pag"),
          text: "Home",
          type: "menu",
          icon: "home"
        },
        {
          id: 2,
          disabled: false,
          onClick: ()=>console.log("change pag"),
          text: "Usuarios",
          type: "menu",
          icon: "manage"
        },
        {
          id: 3,
          disabled: false,
          onClick: ()=>console.log("change pag"),
          text: "Vehículos",
          type: "menu",
          icon: "manage"
        },
        {
          id: 4,
          disabled: false,
          onClick: ()=>console.log("change pag"),
          text: "Ordenes",
          type: "menu",
          icon: "notifications1"
        },
        {
          id: 5,
          disabled: false,
          onClick: ()=>console.log("change pag"),
          text: "Inventario",
          type: "menu",
          icon: "calculate"
        },
        {
          id: 6,
          disabled: false,
          onClick: ()=>console.log("change pag"),
          text: "Configuración",
          type: "menu",
          icon: "settings"
        },
      ]}
    />
  );
}
