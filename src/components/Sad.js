import React from 'react';
import {EyesSad, EyeLeftSad, EyeRightSad, MouthSad} from '../styles/Styles';

export default function Sad(){
  return(
    <>
      <EyesSad>
          <EyeLeftSad />
          <EyeRightSad />
      </EyesSad>
      <MouthSad />
    </>
  );
}