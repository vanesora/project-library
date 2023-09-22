import React, { FunctionComponent, useEffect, useState } from "react";
import { OrganismTable } from "library-tfm";

export function UserListPage() {
  const headers = [
    "PrimerNombre",
    "PrimerApellido",
    "SegundoApellido",
    "Celular",
    "Perfil",
  ];

  const data = [
    {
      id: 1,
      PrimerNombre: "Fabian",
      PrimerApellido: "Cardenas",
      SegundoApellido: "Colorado",
      Celular: "3154879658",
      Perfil: "Cleaner",
      status: true,
    },
    {
      id: 2,
      PrimerNombre: "Camilo",
      PrimerApellido: "Quijano",
      SegundoApellido: "Contreras",
      Celular: "3154789652",
      Perfil: "Cleaner",
      status: true,
    },
    {
      id: 3,
      PrimerNombre: "Freddy",
      PrimerApellido: "Arcila",
      SegundoApellido: "Sierra",
      Celular: "3598741458",
      Perfil: "Cleaner",
      status: true,
    },
    {
      id: 4,
      PrimerNombre: "Felipe",
      PrimerApellido: "Torres",
      SegundoApellido: "Muñoz",
      Celular: "3124516895",
      Perfil: "Cleaner",
      status: true,
    },
  ];

  const actions = {
    edit: ()=>handleAction(),
    view: ()=>handleAction()
  };

  const handleAction=()=>{
    console.log("click edit")
  }

  const handlePageChange = (value?: any) => {
    console.log("new pag: ", value);
  };

  return (
    <div style={{ backgroundColor: "white", height:'100%', padding: '100px 20px' }}>
      <OrganismTable
        headers={headers}
        onPageChange={handlePageChange}
        showStatus={false}
        totalPages={3}
        actions={actions}
        data={data}
        showId={false}
      />
    </div>
  );
}
