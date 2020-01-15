import React, {useEffect, useState} from 'react';
import { Modal, ModalHeader, ModalBody, Button, ModalFooter} from 'reactstrap';
import {Redirect} from 'react-router-dom';
//importação dos styled Components que geram o emoji com o efeito de sorriso
import {EyesHappy, EyeLeftHappy, EyeRightHappy, MouthHappy} from '../styles/Styles';
//importação do serviço que utiliza o axios para realizar requisições HTTP
import api from '../api';

export default function Happy(){
  /* aqui crio os estados que serão utilizados no componente utilizando o hook useState do React
     que ajuda com a gestão destes estados
  */
  const [modal, setModal] = useState(false);
  const [toggleClose, setToggleClose] = useState(false);
  const [joke, setJoke] = useState(null);
  const [redirect, setRedirect] = useState(null);
  const [timeExecution, setTimeExecution] = useState(0);

  //seta false para fechar o modal quando for clicado no botão 'fechar' e redireciona para o estado inicial
  const toggleModal = () => {
    setModal(!modal);
    setRedirect(3);
  };

  /*
     Aqui utilizo outro hook, o useEffect que basicamente carrega nosso estado inicial e o altera 
     baseado em uma interação do usuário, ou um evento, ou como neste caso, de acordo com o retorno 
     da requisição da api de piadas informana na configuração do axios
  */
  useEffect( () => { 
    /* função assincrona que faz a requisição à api e retorna a piada aleatória */
    async function getJoke(){
      //realizando a requisição e armazenando o retorno em 'response'
      const response = await api.get();
      //abrindo o modal
      setModal(true);
      //setando o retorno na variável removendo os escapes tipo &quot;
      let data = unescape(response.data);
      //altero o estado Joke setando novo valor, neste caso a piada retornada
      setJoke(data);
      /* explodindo a piada para descobrir quantas palavras ela possui
         utilizando como delimitador o espaço que existe entre elas
      */
      let amountWords = data.split(' ');
      /* determinando o tempo de execução do efeito, sendo a quantidade de palavras dividido por 2
         visto que podem haver palavras curtas e longas, colocando na média meio segundo por palavra
      */
      setTimeExecution(parseInt(amountWords.length)/2);
      /* utilizando o setTimeout para determinar quando poderá ser fechado o modal após o 'término da leitura' da piada, 
         como tempo de execução,é usado a mesma lógica de meio segundo para cada palavra
      */
      setTimeout(() => {
        //após o tempo libera o botão que fecha o modal
        setToggleClose(true);
      },(parseInt(amountWords.length)*500));

    }
    //chama a função que carrega a piada pela primeira vez
    getJoke();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return(
    <>
    {/* utilizando o redirect do Router-Dom para redirecionar o usuário, 
      neste caso só redireciona se o estado 'redirect' for true, caso ontrario não faz nada
    */}
    {redirect ? <Redirect to={redirect} />: null}
    {/* Aqui adiciono os styled componentes que geram os olhos e a boca do emoji, 
        passando a props 'time' que determinará a duração do efeito.
    */}
        <EyesHappy>
            <EyeLeftHappy time={timeExecution}/>
            <EyeRightHappy time={timeExecution}/>
        </EyesHappy>
        <MouthHappy time={timeExecution}/>
 
  {/* Este é o modal que renderizará a piada */}
    <Modal isOpen={modal} >
      <ModalHeader>Uma piada para descontrair</ModalHeader>
      <ModalBody>
        {joke}
      </ModalBody>
      <ModalFooter>
          <Button disabled={!toggleClose} color="primary" onClick={toggleModal}>Fechar</Button>
        </ModalFooter>
    </Modal>
    </>
  );
}
