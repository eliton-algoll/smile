import styled from 'styled-components';

/* estilizando o smile */
export const Smile = styled.div`
  display: flex;
  align-items: inherit;
  flex-wrap: wrap;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(223,221,27,1) 0%, rgba(226,224,37,1) 19%, rgba(171,169,50,1) 100%);
  cursor: pointer;
  @media (min-width: 1400px) {
    width: 800px;
    height: 800px;
    }
`;

/* estilizando a boca */
export const Mouth = styled.div`
  border: 6px solid #000;
  width: 50%;
  margin: 0 auto;
  margin-top:-250px;
`;

/* estilizando os olhos */
export const Eyes = styled.div`
  display: flex;
  align-items: inherit;
  justify-content: space-around;
  width: 90%;
  margin-top:100px;
`;

export const EyeLeft = styled.div`
  background: radial-gradient(circle, rgba(66,67,68,1) 0%, rgba(0,0,0,1) 100%);
  border-radius: 50%;
  margin-left: 90px;
    @media (min-width: 1400px) {
      width: 70px;
      height: 70px;
      }
`;
 /* o olho direito herda os atributos do esquerdo */
export const EyeRight = styled(EyeLeft)`
`;

/* smile triste */
export const MouthSad = styled(Mouth)`
  height: 50%;
  border: none;
  border-top: 5px solid #222;
  border-radius: 50%;
  margin-top: 150px ;
`;
export const EyesSad = styled(Eyes)`
  margin-top: 250px ;
`;
export const EyeLeftSad = styled(EyeLeft)`
  background: none;
  border: none;
  border-bottom: 5px solid #222;
  border-radius: 50%;
`;
export const EyeRightSad = styled(EyeLeftSad)`
`;

/* Fim smile triste */

/* Smile com efeito sorrindo */
export const EyesHappy = styled(EyesSad)`
     -webkit-animation: smilingEyesDiv ${props => `${props.time}s`}  linear 1s  forwards;
     animation: smilingEyesDiv ${props => `${props.time}s`}  linear 1s  forwards;
     /* Animação gera efeito sorriso*/
     @keyframes smilingEyesDiv {
        0% { margin-top: 250px; }
        10% { margin-top: 230px; } 
        20% { margin-top: 210px; }
        30% { margin-top: 190px; }
        40% { margin-top: 170px; }
        50% { margin-top: 180px; }
        60% { margin-top: 220px; }
        70% { margin-top: 220px; }
        80% { margin-top: 220px; }
        90% { margin-top: 220px; }
        100% { margin-top: 220px; }
     }
     @-webkit-keyframes smilingEyesDiv {
        0% { margin-top: 250px; }
        10% { margin-top: 230px; } 
        20% { margin-top: 210px; }
        30% { margin-top: 190px; }
        40% { margin-top: 170px; }
        50% { margin-top: 180px; }
        60% { margin-top: 220px; }
        70% { margin-top: 220px; }
        80% { margin-top: 220px; }
        90% { margin-top: 220px; }
        100% { margin-top: 220px; }
     }
`;
export const EyeLeftHappy = styled(EyeLeftSad)`
     -webkit-animation: smilingEyes ${props => `${props.time}s`} linear 1s  forwards;
     animation: smilingEyes ${props => `${props.time}s`} linear 1s  forwards;
     /* Animação gera efeito sorriso*/
     @keyframes smilingEyes {
        0% { border: none; border-bottom: 5px solid #222; border-radius:50%; }
        10% {  border: none; border-bottom: 5px solid #222; border-radius:40%; }
        20% {  border: none; border-bottom: 5px solid #222; border-radius:30%; }
        30% {  border: none; border-bottom: 5px solid #222; border-radius:20%;}
        40% {  border: none; border-bottom: 5px solid #222; border-radius: 10%; }
        50% { border: none; border-bottom: 5px solid #222; border-radius:0%;}
        60% {  border: none; border-top: 5px solid #222; border-radius:10%;}
        70% {   border: none; border-top: 5px solid #222; border-radius:20%;}
        80% {   border: none; border-top: 5px solid #222; border-radius:30%;}
        90% {  border: none; border-top: 5px solid #222; border-radius:40%;}
        100% {  border: none; border-top: 5px solid #222; border-radius:50%;}
     }
      @-webkit-keyframes smilingEyes {
        0% { border: none; border-bottom: 5px solid #222; border-radius:50%; }
        10% {  border: none; border-bottom: 5px solid #222; border-radius:40%; }
        20% {  border: none; border-bottom: 5px solid #222; border-radius:30%; }
        30% {  border: none; border-bottom: 5px solid #222; border-radius:20%;}
        40% {  border: none; border-bottom: 5px solid #222; border-radius: 10%; }
        50% { border: none; border-bottom: 5px solid #222; border-radius:0%;}
        60% {  border: none; border-top: 5px solid #222; border-radius:10%;}
        70% {   border: none; border-top: 5px solid #222; border-radius:20%;}
        80% {   border: none; border-top: 5px solid #222; border-radius:30%;}
        90% {  border: none; border-top: 5px solid #222; border-radius:40%;}
        100% {  border: none; border-top: 5px solid #222; border-radius:50%;}
     }
`;
//o olho direito herda o comportamento do esquerdo
export const EyeRightHappy = styled(EyeLeftHappy)`
`;
//o memso efeito aplicamos para a boca
export const MouthHappy = styled(MouthSad)`
     -webkit-animation: smilingMouth ${props => `${props.time}s`} linear 1s  forwards;
     animation: smilingMouth ${props => `${props.time}s`} linear 1s  forwards;
     /* Animação gera efeito sorriso*/
     @keyframes smilingMouth {
        0% {    border: none ;  border-top: 3px solid #000; height:50%;  margin-top: 150px; }
        10% {   border: none ;  border-top: 3px solid #000;  height:40%;   margin-top: 100px; }
        20% {   border: none ;  border-top: 3px solid #000;   height:30%;  margin-top: 50px; }
        30% {   border: none ;  border-top: 3px solid #000;  height:20%;  margin-top: 0px; }
        40% {   border: none ;  border-top: 3px solid #000;  height:10%;  margin-top: -50px; }
        50% {   border: none ; border-bottom: 3px solid #000; height:0%;  margin-top: -100px; }
        60% {   border: none ;  border-bottom: 3px solid #000; height:10%;margin-top: -150px; }
        70% {   border: none ;  border-bottom: 3px solid #000; height:20%;margin-top: -200px; }
        80% {   border: none ;  border-bottom: 3px solid #000; height:30%;margin-top: -250px; }
        90% {   border: none ;  border-bottom: 3px solid #000; height:40%;margin-top: -300px; }
        100% {  border: none ;  border-bottom: 3px solid #000;  height:50%; margin-top: -350px;}
     }
      @-webkit-keyframes smilingMouth {
        0% {    border: none ;  border-top: 3px solid #000; height:50%;  margin-top: 150px; }
        10% {   border: none ;  border-top: 3px solid #000;  height:40%;   margin-top: 100px; }
        20% {   border: none ;  border-top: 3px solid #000;   height:30%;  margin-top: 50px; }
        30% {   border: none ;  border-top: 3px solid #000;  height:20%;  margin-top: 0px; }
        40% {   border: none ;  border-top: 3px solid #000;  height:10%;  margin-top: -50px; }
        50% {   border: none ;  border-bottom: 3px solid #000; height:0%;  margin-top: -100px; }
        60% {   border: none ;  border-bottom: 3px solid #000; height:10%;margin-top: -150px; }
        70% {   border: none ;  border-bottom: 3px solid #000; height:20%;margin-top: -200px; }
        80% {   border: none ;  border-bottom: 3px solid #000; height:30%;margin-top: -250px; }
        90% {   border: none ;  border-bottom: 3px solid #000; height:40%;margin-top: -300px; }
        100% {  border: none ;  border-bottom: 3px solid #000;  height:50%; margin-top: -350px;}
     }
`;
/* fim do efeito sorrindo*/