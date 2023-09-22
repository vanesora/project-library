import React from 'react';
import { HomeContainer } from './styles';
import { AtomLogo, AtomTitle } from "library-tfm";


export function HomePage() {
  return (
    <HomeContainer>
      <AtomTitle text='BIENVENIDOS' align='center' color='white' />
      <AtomLogo size="large" type='complete' />
    </HomeContainer>
  );
}
