  import React from 'react';

  //importando os Styles components
  import {Eyes, EyeLeft, EyeRight, Mouth} from '../styles/Styles';
  
  /*
      Este é o componente que deixará o emoji com cara de indiferente
      nem feliz nem triste, não possui nenhuma interação que não a estilização 
      dos olhos e bocas usando os styled componentes criados
  */
  export default function Indifferent(){
    
    return (
      <>
      <Eyes>
        <EyeLeft />
        <EyeRight />
      </Eyes>
      <Mouth />
      </>
      );
    }