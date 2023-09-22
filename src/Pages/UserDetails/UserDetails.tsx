import React, { FunctionComponent, useEffect, useState } from "react";
import { AtomLogo, OrganismForm, IMoleculeInputProps } from "library-tfm";

export function UserDetailsPage() {
  const data: IMoleculeInputProps[] = [
    {
      label: "Primer Nombre",
      type: "Text",
      value: "",
      required: true,
      name: "Primer Nombre",
      readOnly: false,
      helperText: "Comprueba que el campo esté correcto",
      theme: "dark",
    },
    {
      label: "Primer Apellido",
      type: "Text",
      value: "",
      required: true,
      name: "Primer Apellido",
      readOnly: false,
      helperText: "Comprueba que el campo esté correcto",
      theme: "dark",
    },
    {
      label: "Segundo Apellido",
      type: "Text",
      value: "",
      required: true,
      name: "Segundo Apellido",
      readOnly: false,
      helperText: "Comprueba que el campo esté correcto",
      theme: "dark",
    },
    {
      label: "Celular",
      type: "Number",
      value: "0",
      required: true,
      name: "Celular",
      readOnly: false,
      helperText: "Comprueba que el campo esté correcto",
      theme: "dark",
    },
    {
      label: "Cedula",
      type: "Number",
      value: "0",
      required: true,
      name: "Cedula",
      readOnly: false,
      helperText: "Comprueba que el campo esté correcto",
      theme: "dark",
    },
    {
      label: "Direccion",
      type: "Text",
      value: "",
      required: true,
      name: "Direccion",
      readOnly: false,
      helperText: "Comprueba que el campo esté correcto",
      theme: "dark",
    },
    {
      label: "Correo Electronico",
      type: "Text",
      value: "",
      required: true,
      name: "Correo Electronico",
      readOnly: false,
      helperText: "Comprueba que el campo esté correcto",
      theme: "dark",
    },
  ];

  const handleSubmit = (value: any) => {
    console.log(value);
  };

  return (
    <div>
      <div>
        <AtomLogo size="medium" type="complete" />
      </div>

      <div>
        <OrganismForm
          inputs={data}
          buttonText="Agregar"
          disabled={false}
          onSubmit={(data) => handleSubmit(data)}
          theme="dark"
        />
      </div>
    </div>
  );
}
