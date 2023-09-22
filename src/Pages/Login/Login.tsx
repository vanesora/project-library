import React, { FunctionComponent, useEffect, useState } from "react";
import { AtomLogo, OrganismForm, IMoleculeInputProps } from "library-tfm";
import { FormContainer, ItemContainer, LoginContainer } from "./styles";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();
  const widthHook = useWindowWidth();
  const data: IMoleculeInputProps[] = [
    {
      label: "Usuario",
      type: "Text",
      value: "",
      required: true,
      name: "Usuario",
      readOnly: false,
      helperText: "Comprueba que el campo esté correcto",
      theme: "dark",
    },
    {
      label: "Contraseña",
      type: "Text",
      value: "",
      required: true,
      name: "Primer Apellido",
      readOnly: false,
      helperText: "Comprueba que el campo esté correcto",
      theme: "dark",
    },
  ];

  const handleSubmit = (value: any) => {
    navigate('/');
  };

  return (
    <LoginContainer>
      <FormContainer>
        <ItemContainer
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AtomLogo size="medium" type="complete" />
        </ItemContainer>
        <ItemContainer style={{maxWidth: "300px"}}>
          <OrganismForm
            inputs={data}
            buttonText="Iniciar Sesión"
            disabled={false}
            onSubmit={(data) => handleSubmit(data)}
            theme="dark"
            columns={1}
          />
        </ItemContainer>
      </FormContainer>
    </LoginContainer>
  );
}
